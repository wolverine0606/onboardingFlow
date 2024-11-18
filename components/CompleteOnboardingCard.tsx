import React, { useEffect, useState } from "react";
import { AppText, AppView } from "./Themed";
import { Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useAppTheme from "@/constants/useAppTheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useOnboarding } from "@/context/Contex";
import { showMessage } from "react-native-flash-message";

export const CardStyles = () => {
  const { colors } = useAppTheme();
  const { height } = useWindowDimensions();

  return StyleSheet.create({
    card: {
      borderRadius: 20,
      height: height / 3,
      overflow: "hidden",
      backgroundColor: colors.red,
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: height / 3,
    },
    AppTextBox: {
      marginTop: "auto",
      padding: 20,
      gap: 8,
    },
    title: {
      color: colors.orangeLight,
      fontSize: 30,
      fontFamily: "ubuntuBold",
      letterSpacing: 1,
    },
    subTitle: {
      color: colors.orangeLight,
      fontSize: 20,
      fontFamily: "ubuntuBold",
      letterSpacing: 1,
    },
    iconBox: {
      paddingTop: height / 12,
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    click: {
      backgroundColor: "rgba(148, 128, 128, 0.6)",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export const CompleteOnboardingCard = () => {
  const styles = CardStyles();
  const { colors } = useAppTheme();
  const { isOnboardingCompleted } = useOnboarding();
  console.log(isOnboardingCompleted);

  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      1000,
      withSequence(
        withTiming(1, { duration: 800 }), // Fade in
        withDelay(400, withTiming(0, { duration: 500 })) // Fade out
      )
    );
  }, []);

  const clickStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  if (isOnboardingCompleted) {
    return null;
  }

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.navigate({ pathname: "/onboarding" })}
    >
      <LinearGradient
        colors={[
          colors.orangeLight,
          colors.orange,
          colors.redLight,
          colors.pink,
        ]}
        dither={false}
        style={styles.background}
        locations={[0.01, 0.3, 0.6, 0.9]}
        start={{ x: 0.3, y: 0.1 }}
      />
      {/* <LinearGradient
        colors={[colors.orangeLight, colors.onboardingBackground]}
        dither={false}
        style={styles.background}
        locations={[0.001, 0.5]}
        start={{ x: 0.3, y: 0.1 }}
      /> */}
      <AppView style={styles.iconBox}>
        <MaterialCommunityIcons
          name="account-check-outline"
          size={44}
          color={colors.orangeLight}
        />
        <MaterialIcons name="settings" size={64} color={colors.orangeLight} />
        <MaterialIcons
          name="check-circle-outline"
          size={74}
          color={colors.orangeLight}
        />
      </AppView>
      <AppView style={styles.AppTextBox}>
        <AppText style={styles.title}>Welcome Aboard!</AppText>
        <AppText style={styles.subTitle}>Let’s Get You Started</AppText>
      </AppView>
      <Animated.View style={[styles.click, clickStyle]}>
        <MaterialIcons name="touch-app" color="white" size={80} />
      </Animated.View>
    </Pressable>
  );
};

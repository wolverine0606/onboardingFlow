import React from "react";
import { Text, View } from "./Themed";
import { Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useAppTheme from "@/constants/useAppTheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

export const CardStyles = () => {
  const { colors } = useAppTheme();
  const { height } = useWindowDimensions();

  return StyleSheet.create({
    card: {
      borderRadius: 20,
      height: height / 3,
      overflow: "hidden",
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: height / 3,
    },
    textBox: {
      marginTop: "auto",
      padding: 20,
      gap: 8,
    },
    title: {
      color: colors.text,
      fontSize: 30,
      fontFamily: "ubuntuBold",
      letterSpacing: 1,
    },
    subTitle: {
      color: colors.text,
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
  });
};

export const CompleteOnboardingCard = () => {
  const styles = CardStyles();
  const { colors } = useAppTheme();
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.navigate("/onboarding/onboarding")}
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
      <View style={styles.iconBox}>
        <MaterialCommunityIcons
          name="account-check-outline"
          size={44}
          color="white"
        />
        <MaterialIcons name="settings" size={64} color="white" />
        <MaterialIcons name="check-circle-outline" size={74} color="white" />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Welcome Aboard!</Text>
        <Text style={styles.subTitle}>Let’s Get You Started</Text>
      </View>
    </Pressable>
  );
};

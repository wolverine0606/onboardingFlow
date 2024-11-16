import { AppText, AppView } from "@/components/Themed";
import { Stack } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useScreen from "./useScreen";
import useStyles from "./useStyles";
import useAppTheme from "@/constants/useAppTheme";
import { StatusBar } from "expo-status-bar";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function OnboardingScreen() {
  const {
    animatedStyle,
    onSkip,
    data,
    onbordingSteps,
    screenIndex,
    fling,
    triggerRightAnimation,
  } = useScreen();
  const styles = useStyles();
  const { colors } = useAppTheme();

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} />
      <StatusBar style="light" />
      <AppView style={styles.stepIndicatorContainer}>
        {onbordingSteps.map((_, index) => (
          <AppView
            key={index}
            style={[
              styles.stepIndicator,
              {
                backgroundColor:
                  index === screenIndex ? colors.gold : colors.gray,
              },
            ]}
          ></AppView>
        ))}
      </AppView>
      <GestureDetector gesture={fling}>
        <AppView style={styles.pageContent}>
          <Animated.View
            entering={FadeIn.duration(300)}
            exiting={FadeOut.duration(300)}
            key={`view-${data.icon}`}
          >
            <MaterialIcons style={styles.image} name={data.icon} size={100} />
          </Animated.View>
          <AppView style={styles.footer}>
            <Animated.Text
              key={`view-${data.title}`}
              style={[styles.title, animatedStyle]}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              key={`view-${data.desc}`}
              style={[styles.descr, animatedStyle]}
            >
              {data.desc}
            </Animated.Text>
          </AppView>
          <AppView style={styles.buttonsRow}>
            <Pressable onPress={() => onSkip()}>
              <AppText style={styles.buttonText}>Skip</AppText>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => triggerRightAnimation()}
            >
              <AppText style={styles.buttonText}>Continue</AppText>
            </Pressable>
          </AppView>
        </AppView>
      </GestureDetector>
    </SafeAreaView>
  );
}

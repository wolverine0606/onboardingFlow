import { router } from "expo-router";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

import { Directions, Gesture } from "react-native-gesture-handler";
import {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withSequence,
  runOnJS,
} from "react-native-reanimated";
import { useWindowDimensions } from "react-native";
import { useOnboarding } from "@/context/Contex";
import { showMessage } from "react-native-flash-message";
import useAppTheme from "@/constants/useAppTheme";

type onboardingStepsData = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  desc: string;
}[];

const onbordingSteps: onboardingStepsData = [
  {
    icon: "celebration",
    title: "Welcome Aboard! Let’s Get You Started",
    desc: "Thanks for joining us! We’re here to help you get up and running smoothly. \nFollow these simple steps to set up your account, personalize your experience, and discover all the great features waiting for you. \nLet’s make sure you’re ready to make the most of everything we have to offer!",
  },
  {
    icon: "settings",
    title: "Set Up Your Experience",
    desc: "Let’s make this journey uniquely yours! Update your profile, choose your preferences, and tailor your experience to fit your needs. \nThis will help us provide the most relevant features and content just for you.",
  },
  {
    icon: "check-circle-outline",
    title: "You’re Ready to Go!",
    desc: "You’re all set! \nExplore and start using all the amazing features now available to you. \nIf you need any help, our support team is just a click away. Welcome to the community—we’re excited to see what you create!",
  },
];

export default function useScreen() {
  const { colors } = useAppTheme();

  const { width } = useWindowDimensions();

  const [screenIndex, setScreenIndex] = useState(0);

  const data = onbordingSteps[screenIndex];

  const position = useSharedValue(0);

  const { setIsOnboardingCompleted } = useOnboarding();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  const fling = Gesture.Simultaneous(
    Gesture.Fling()
      .direction(Directions.RIGHT)
      .onEnd(() => {
        triggerLeftAnimation();
      })
      .runOnJS(true),
    Gesture.Fling()
      .direction(Directions.LEFT)
      .onEnd(() => {
        triggerRightAnimation();
      })
      .runOnJS(true)
  );

  const triggerRightAnimation = () => {
    if (screenIndex < onbordingSteps.length - 1) {
      position.value = withSequence(
        withTiming(-width, { duration: 300 }),
        withTiming(width, { duration: 0 }, () => {
          runOnJS(setScreenIndex)(screenIndex + 1);
        }),
        withTiming(0, { duration: 300 })
      );
    } else {
      goBack();
    }
  };

  const triggerLeftAnimation = () => {
    if (screenIndex)
      position.value = withSequence(
        withTiming(width, { duration: 300 }),
        withTiming(-width, { duration: 0 }, () => {
          runOnJS(setScreenIndex)(screenIndex - 1);
        }),
        withTiming(0, { duration: 300 })
      );
  };

  const onSkip = () => {
    if (screenIndex === onbordingSteps.length - 1) {
      goBack();
    } else {
      position.value = withSequence(
        withTiming(-width, { duration: 100 }),
        withTiming(width, { duration: 0 }, () => {
          runOnJS(setScreenIndex)(onbordingSteps.length - 1);
        }),
        withTiming(0, { duration: 100 })
      );
    }
  };

  const goBack = () => {
    setIsOnboardingCompleted(true);
    router.navigate("/(tabs)");
    showMessage({
      message: "Onboarding completed!!!",
      backgroundColor: colors.buttonGray,
      type: "success",
      titleStyle: {
        fontFamily: "Ubuntu_700Bold_Italic",
        fontSize: 18,
        textAlign: "center",
        flex: 1,
        justifyContent: "center",
        color: colors.white,
      },
    });
  };

  return {
    animatedStyle,
    onSkip,
    data,
    onbordingSteps,
    screenIndex,
    fling,
    triggerRightAnimation,
  };
}

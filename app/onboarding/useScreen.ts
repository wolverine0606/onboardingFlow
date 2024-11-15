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

type onboardingStepsData = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  desc: string;
}[];

const onbordingSteps: onboardingStepsData = [
  {
    icon: "celebration",
    title: "Welcome Aboard! Let’s Get You Started",
    desc: "Thanks for joining us! We’re here to help you get up and running smoothly. Follow these simple steps to set up your account, personalize your experience, and discover all the great features waiting for you. Let’s make sure you’re ready to make the most of everything we have to offer!",
  },
  {
    icon: "settings",
    title: "Set Up Your Experience",
    desc: "Let’s make this journey uniquely yours! Update your profile, choose your preferences, and tailor your experience to fit your needs. This will help us provide the most relevant features and content just for you.",
  },
  {
    icon: "check-circle-outline",
    title: "You’re Ready to Go!",
    desc: "You’re all set! Explore and start using all the amazing features now available to you. If you need any help, our support team is just a click away. Welcome to the community—we’re excited to see what you create!",
  },
];

export default function useScreen() {
  const { width } = useWindowDimensions();
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onbordingSteps[screenIndex];

  const position = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  const triggerRightAnimation = () => {
    position.value = withSequence(
      withTiming(-width, { duration: 300 }),
      withTiming(width, { duration: 0 }, () => {
        runOnJS(onContinue)();
      }),
      withTiming(0, { duration: 300 })
    );
  };
  const triggerLeftAnimation = () => {
    position.value = withSequence(
      withTiming(width, { duration: 300 }),
      withTiming(-width, { duration: 0 }, () => {
        runOnJS(onBack)();
      }),
      withTiming(0, { duration: 300 })
    );
  };

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

  const onContinue = () => {
    if (screenIndex < onbordingSteps.length - 1)
      return setScreenIndex(screenIndex + 1);
    router.back();
  };
  const onBack = () => {
    if (screenIndex) return setScreenIndex(screenIndex - 1);
  };
  const onSkip = () => {
    if (screenIndex === onbordingSteps.length - 1) router.back();
    return setScreenIndex(onbordingSteps.length - 1);
  };

  return {
    onContinue,
    onSkip,
    data,
    onbordingSteps,
    screenIndex,
    setScreenIndex,
    onBack,
    fling,
    triggerLeftAnimation,
    triggerRightAnimation,
    animatedStyle,
    position,
  };
}

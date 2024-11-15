import { router } from "expo-router";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

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

export const useScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onbordingSteps[screenIndex];

  const onContinue = () => {
    if (screenIndex < onbordingSteps.length - 1)
      return setScreenIndex(screenIndex + 1);
    router.back();
  };
  const onSkip = () => {
    if (screenIndex === onbordingSteps.length - 1) router.back();
    return setScreenIndex(onbordingSteps.length - 1);
  };

  return { onContinue, onSkip, data };
};

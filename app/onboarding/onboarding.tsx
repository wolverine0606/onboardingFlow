import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { Pressable, SafeAreaView, useWindowDimensions } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useScreen from "./useScreen";
import useStyles from "./useStyles";
import useAppTheme from "@/constants/useAppTheme";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  SlideOutLeft,
  SlideInRight,
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideOutRight,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withSequence,
  runOnJS,
} from "react-native-reanimated";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const { onSkip, data, onbordingSteps, screenIndex, onContinue, onBack } =
    useScreen();
  const styles = useStyles();
  const { colors } = useAppTheme();
  const swipeDir = useSharedValue<string>("left");
  console.log(swipeDir.value);

  const position = useSharedValue(0); // Starting at the center (original position)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  const triggerRightAnimation = () => {
    position.value = withSequence(
      withTiming(-width, { duration: 300 }),
      withTiming(width, { duration: 0 }),
      withTiming(0, { duration: 300 }, () => {
        runOnJS(onContinue)();
      })
    );
  };
  const triggerLeftAnimation = () => {
    position.value = withSequence(
      withTiming(width, { duration: 300 }),
      withTiming(-width, { duration: 0 }),
      withTiming(0, { duration: 300 }, () => {
        runOnJS(onBack)();
      })
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
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} />
      <StatusBar style="light" />
      <View style={styles.stepIndicatorContainer}>
        {onbordingSteps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              {
                backgroundColor:
                  index === screenIndex ? colors.gold : colors.gray,
              },
            ]}
          ></View>
        ))}
      </View>
      <GestureDetector gesture={fling}>
        <View style={styles.pageContent}>
          <Animated.View
            entering={FadeIn.duration(350)}
            exiting={FadeOut.duration(350)}
            key={`view-${data.icon}`}
          >
            <MaterialIcons style={styles.image} name={data.icon} size={100} />
          </Animated.View>
          <View style={styles.footer}>
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
            <View style={styles.buttonsRow}>
              <Pressable onPress={() => onSkip()}>
                <Text style={styles.buttonText}>Skip</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => onContinue()}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

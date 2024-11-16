import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import useAppTheme from "@/constants/useAppTheme";
import { CompleteOnboardingCard } from "@/components/CompleteOnboardingCard";
import { useState } from "react";

export default function TabOneScreen() {
  const { colors } = useAppTheme();
  const [onboardingCompleted, setOnboardingcompleted] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[styles.pageContent, { paddingHorizontal: width * 0.01 }]}
      >
        <CompleteOnboardingCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContent: {
    flex: 1,
    top: 10,
  },
});

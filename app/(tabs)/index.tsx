import { Button, SafeAreaView, StyleSheet } from "react-native";
import { AppButton, Text, View } from "@/components/Themed";

import EditScreenInfo from "@/components/EditScreenInfo";
import useAppTheme from "@/constants/useAppTheme";
import { Link, router } from "expo-router";
import { CompleteOnboardingCard } from "@/components/CompleteOnboardingCard";
import { useState } from "react";

export default function TabOneScreen() {
  const { colors } = useAppTheme();
  const [onboardingCompleted, setOnboardingcompleted] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <CompleteOnboardingCard />
      </View>
      <View style={styles.buttonWraper}>
        <AppButton
          onPress={() => router.navigate("/onboarding/onboarding")}
          title="go to onboarding"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  card: {
    backgroundColor: "white",
    flex: 1,
  },
  buttonWraper: {
    flex: 1,
    flexDirection: "column-reverse",
    bottom: 40,
    alignItems: "center",
  },
});

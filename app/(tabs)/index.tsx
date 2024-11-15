import { Button, StyleSheet } from "react-native";
import { AppButton, Text, View } from "@/components/Themed";

import EditScreenInfo from "@/components/EditScreenInfo";
import useAppTheme from "@/constants/useAppTheme";
import { Link, router } from "expo-router";

export default function TabOneScreen() {
  const { text, background } = useAppTheme();
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <View style={{ flex: 1, flexDirection: "column-reverse", bottom: 40 }}>
        <AppButton
          onPress={() => router.navigate("/onboarding")}
          title="go to onboarding"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});

import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View, Text } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import useAppTheme from "@/constants/useAppTheme";

export default function ModalScreen() {
  const { background } = useAppTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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

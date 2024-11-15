import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

import EditScreenInfo from "@/components/EditScreenInfo";
import useAppTheme from "@/constants/useAppTheme";

export default function TabOneScreen() {
  const { text, background } = useAppTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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

import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

import EditScreenInfo from "@/components/EditScreenInfo";
import useAppTheme from "@/constants/useAppTheme";

export default function TabTwoScreen() {
  const { background } = useAppTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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

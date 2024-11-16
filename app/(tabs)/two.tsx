import { StyleSheet } from "react-native";
import { AppText, AppView } from "@/components/Themed";

import EditScreenInfo from "@/components/EditScreenInfo";
import useAppTheme from "@/constants/useAppTheme";

export default function TabTwoScreen() {
  const { colors } = useAppTheme();
  return (
    <AppView style={styles.container}>
      <AppText style={styles.title}>Tab Two</AppText>
      <AppView style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </AppView>
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

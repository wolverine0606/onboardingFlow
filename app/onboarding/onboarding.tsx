import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useScreen } from "./useScreen";
import { useStyles } from "./useStyles";

export default function OnboardingScreen() {
  const { onContinue, onSkip, data } = useScreen();
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContent}>
        <MaterialIcons style={styles.image} name={data.icon} size={100} />
        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.descr}>{data.desc}</Text>
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
    </SafeAreaView>
  );
}

import useAppTheme from "@/constants/useAppTheme";
import { useWindowDimensions, StyleSheet } from "react-native";

export const useStyles = () => {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();

  return StyleSheet.create({
    page: {
      justifyContent: "center",
      flex: 1,
      backgroundColor: colors.onboardingBackground,
    },
    pageContent: {
      alignItems: "center",
      gap: 25,
      flex: 1,
      padding: width * 0.05,
    },
    title: {
      color: colors.text,
      fontSize: 30,
      fontFamily: "InterExtraBold",
      letterSpacing: 1,
    },
    descr: {
      color: colors.gray,
      fontSize: 20,
      fontFamily: "InterExtraBold",
      lineHeight: 25,
    },
    image: {
      color: colors.gold,
    },
    footer: {
      marginTop: "auto",
      gap: 15,
    },
    buttonsRow: {
      marginTop: 20,
      flexDirection: "row",
      paddingHorizontal: width * 0.03,
      gap: 50,
      alignItems: "center",
    },
    button: {
      flex: 1,
      backgroundColor: colors.buttonGray,
      borderRadius: 50,
      minWidth: 70,
      alignItems: "center",
    },
    buttonText: {
      padding: 15,
      color: colors.text,
      fontSize: 15,
      fontFamily: "InterExtraBold",
    },
  });
};

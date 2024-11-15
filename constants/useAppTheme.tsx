import { light, dark } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export default function useAppTheme() {
  const colorScheme = useColorScheme();

  return colorScheme === "dark" ? dark : light;
}

import useAppTheme from "@/constants/useAppTheme";
import { TextProps } from "react-native";
import { Text } from "@/components/Themed";

export function MonoText(props: TextProps) {
  const { text } = useAppTheme();
  return (
    <Text
      style={[props.style, { fontFamily: "SpaceMono-Regular", color: text }]}
    />
  );
}

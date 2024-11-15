import useAppTheme from "@/constants/useAppTheme";
import { TextProps } from "react-native";
import { Text } from "@/components/Themed";

export function MonoText(props: TextProps) {
  const { colors } = useAppTheme();
  return (
    <Text
      style={[
        props.style,
        { fontFamily: "SpaceMono-Regular", color: colors.text },
      ]}
    />
  );
}

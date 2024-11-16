import useAppTheme from "@/constants/useAppTheme";
import { TextProps } from "react-native";
import { AppText } from "@/components/Themed";

export function MonoText(props: TextProps) {
  const { colors } = useAppTheme();
  return (
    <AppText
      style={[
        props.style,
        { fontFamily: "SpaceMono-Regular", color: colors.text },
      ]}
    />
  );
}

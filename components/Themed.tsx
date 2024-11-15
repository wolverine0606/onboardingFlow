/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import useAppTheme from "@/constants/useAppTheme";
import { Text as DefaultText, View as DefaultView } from "react-native";

export type TextProps = DefaultText["props"];
export type ViewProps = DefaultView["props"];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const { text } = useAppTheme();

  return <DefaultText style={[{ color: text }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  const { background } = useAppTheme();

  return (
    <DefaultView
      style={[{ backgroundColor: background }, style]}
      {...otherProps}
    />
  );
}

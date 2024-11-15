/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import useAppTheme from "@/constants/useAppTheme";
import { forwardRef, ReactNode } from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  ButtonProps,
  Button,
  TouchableOpacity,
} from "react-native";

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

type ButtonType = "filled" | "tonal" | "outlined" | "text";

export interface AppButtonProps {
  type?: ButtonType;
  size?: "small" | "large" | "mini";
  loading?: boolean;
  title: string;
  onPress?: () => void; // Adding `onPress` to handle button clicks
}

// Updated to use TouchableOpacity and accept `onPress` from parent props
export const AppButton = (props: AppButtonProps) => {
  const { button, darkText } = useAppTheme();
  const { title, onPress } = props;

  return (
    <TouchableOpacity
      style={{ backgroundColor: button, borderRadius: 16, padding: 10 }}
      onPress={onPress}
    >
      <Text style={{ color: darkText }}>{title}</Text>
    </TouchableOpacity>
  );
};

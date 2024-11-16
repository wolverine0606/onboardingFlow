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
export type ViewProps = DefaultView["props"] & {
  bg?: string;
};

export function AppText(props: TextProps) {
  const { style, ...otherProps } = props;
  const { colors } = useAppTheme();

  return (
    <DefaultText style={[{ color: colors.text }, style]} {...otherProps} />
  );
}

export function AppView(props: ViewProps) {
  const { style, ...otherProps } = props;
  const { colors } = useAppTheme();

  return (
    <DefaultView
      style={[props.bg ? { backgroundColor: colors.background } : null, style]}
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
  const { colors } = useAppTheme();
  const { title, onPress } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.buttonWhite,
        borderRadius: 16,
        padding: 10,
      }}
      onPress={onPress}
    >
      <Text style={{ color: colors.darkText }}>{title}</Text>
    </TouchableOpacity>
  );
};

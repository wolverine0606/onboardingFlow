const tintColorLight = "#000";
const tintColorDark = "#fff";

export const light = {
  text: "#000",
  background: "#fff",
  button: "#fff",
  darkText: "#000",
  tint: tintColorLight,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorLight,
};

export const dark: typeof light = {
  text: "#fff",
  background: "#000",
  button: "#fff",
  darkText: "#000",
  tint: tintColorDark,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorDark,
};

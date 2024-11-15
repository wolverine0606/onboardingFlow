const tintColorLight = "#000";
const tintColorDark = "#fff";

export const light = {
  colors: {
    text: "#000",
    background: "#fff",
    onboardingBackground: "#15141A",
    buttonWhite: "#fff",
    buttonGray: "",
    darkText: "#000",
    tabIconDefault: "#ccc",
    gray: "#a5a5a5",
    gold: "#FFDA11",
  },
  tint: tintColorLight,
  tabIconSelected: tintColorLight,
};

export const dark: typeof light = {
  colors: {
    text: "#fff",
    background: "#000",
    onboardingBackground: "#15141A",
    buttonWhite: "#fff",
    darkText: "#000",
    tabIconDefault: "#ccc",
    gray: "#a5a5a5",
    buttonGray: "#302E38",
    gold: "#FFDA11",
  },
  tint: tintColorDark,
  tabIconSelected: tintColorDark,
};

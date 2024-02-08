import { PixelRatio } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary.main,
  },

  text: {
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    fontSize: PixelRatio.getFontScale() * theme.fontSizes.extraLarge,
  },
}));

import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
  },

  content: {
    gap: 16,
    padding: 16,
  },

  label: (secondary?: boolean) => ({
    fontFamily: secondary ? theme.fonts.bold : theme.fonts.regular,
  }),
}));

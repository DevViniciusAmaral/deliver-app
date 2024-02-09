import { PixelRatio } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  horizontalContainer: {
    gap: 2,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  text: (secondary?: boolean) => ({
    fontFamily: theme.fonts.medium,
    textTransform: secondary ? "uppercase" : "none",
    color: secondary ? theme.colors.secondary : theme.colors.text,
    fontSize:
      PixelRatio.getFontScale() *
      (secondary ? theme.fontSizes.extraSmall : theme.fontSizes.default),
  }),

  notificationButton: {
    padding: 8,
    elevation: .5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary.light,
  },
}));

import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {},

  content: {
    gap: 16,
    padding: 16,
  },

  label: (secondary?: boolean) => ({
    fontFamily: secondary ? theme.fonts.bold : theme.fonts.regular,
  }),

  categoryLabel: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.extraLarge,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },

  productCard: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
  },

  productLabel: {},

  productDescription: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.primary.dark,
  },
}));

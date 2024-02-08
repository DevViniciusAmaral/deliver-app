import { fonts } from "./Fonts";
import { fontSizes } from "./FontSizes";

export const darkTheme = {
  colors: {
    primary: {
      main: "#F3F3F3",
      light: "#FFFFFF",
      dark: "#BFBFBF",
    },
    secondary: "#E5012B",
    warning: "#F8B914",
    text: "#141414",
  },
  fontSizes,
  fonts,
} as const;

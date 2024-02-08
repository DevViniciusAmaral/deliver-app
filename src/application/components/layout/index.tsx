import React from "react";
import { stylesheet } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useStyles } from "react-native-unistyles";
import {
  View,
  StyleProp,
  ViewStyle,
  ScrollView,
  ScrollViewProps,
} from "react-native";

interface LayoutProps extends ScrollViewProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Layout = ({
  style,
  header,
  footer,
  children,
  scrollEnabled,
  containerStyle,
  ...rest
}: LayoutProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={containerStyle}>
      <StatusBar style="dark" backgroundColor={theme.colors.primary.main} />

      {scrollEnabled ? (
        <ScrollView style={style} {...rest}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, style]} {...rest}>
          {children}
        </View>
      )}
    </View>
  );
};

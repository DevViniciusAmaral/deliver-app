import React from "react";
import { stylesheet } from "./styles";
import { Text, View } from "react-native";
import { useStyles } from "react-native-unistyles";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Word!</Text>
    </View>
  );
};

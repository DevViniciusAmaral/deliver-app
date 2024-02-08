import React from "react";
import { Text } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

// COMPONENTS
import { Layout } from "@components/layout";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout>
      <Text style={styles.text}>Hello Word!</Text>
    </Layout>
  );
};

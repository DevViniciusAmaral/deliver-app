import React, { useState } from "react";
import { Text, View } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

// COMPONENTS
import { Layout } from "@components/layout";
import { HeaderApp } from "@components/header-app";
import { Searchbar } from "@components/search-bar";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  const [searchValue, setSearchValue] = useState("");

  return (
    <Layout enablePaddingTop header={<HeaderApp />} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label()}>
          Olá Oliver, <Text style={styles.label(true)}>Bom dia!</Text>
        </Text>

        <Searchbar
          placeholder="Pesquisar pratos, restaurantes"
          onChangeText={setSearchValue}
        />
      </View>
    </Layout>
  );
};

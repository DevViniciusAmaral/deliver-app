import { stylesheet } from "./styles";
import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { products } from "src/infrastructure/database";

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

      <FlatList
        contentContainerStyle={{ gap: 16, paddingBottom: 16 }}
        data={[...products[0].data, ...products[0].data]}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.photo} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.productLabel}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </Layout>
  );
};

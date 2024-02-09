import React from "react";
import { View } from "react-native";
import { stylesheet } from "./styles";
import { Text } from "@components/text";
import { Bell, ChevronDown } from "lucide-react-native";
import { useStyles } from "react-native-unistyles";
import { Button } from "@components/button";

export const HeaderApp = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text(true)}>Entregar</Text>

        <View style={styles.horizontalContainer}>
          <Text style={styles.text()}>Meu endereço</Text>

          <Button>
            <ChevronDown size={15} color={theme.colors.text} />
          </Button>
        </View>
      </View>

      <Button style={styles.notificationButton}>
        <Bell size={20} color={theme.colors.primary.dark} />
      </Button>
    </View>
  );
};

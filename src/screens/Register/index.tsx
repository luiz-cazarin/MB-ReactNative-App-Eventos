import * as React from "react";
import { styles } from "./styles";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";

export function Register({ navigation }) {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Pressable onPress={() => navigation.navigate("home")}>
          <Text>Home</Text>
        </Pressable>
      </SafeAreaView>
    </Background>
  );
}

import * as React from "react";
import { styles } from "./styles";
import { View, TextInput, Image, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Login({ navigation }: any) {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const makeLogin = async () => {
    navigation.navigate("Main", {});
    try {
      await AsyncStorage.setItem("@storage_Key", "1");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ height: 220, width: 220 }}
          source={require("../../assets/logo-mb.png")}
        ></Image>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={loginData.login}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={loginData.password}
          placeholder="Password"
        />
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.buttonLogin} onPress={makeLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.registerText}>Cadastrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

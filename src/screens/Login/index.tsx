import * as React from "react";
import { styles } from "./styles";
import { View, TextInput, Image, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useState } from "react";

export function Login({ navigation }) {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const makeLogin = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.png")}></Image>
      </View>
      <View style={styles.inputData}>
        <TextInput
          style={styles.emailField}
          value={loginData.login}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.passwordField}
          value={loginData.login}
          placeholder="Password"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("home", {})}
        >
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

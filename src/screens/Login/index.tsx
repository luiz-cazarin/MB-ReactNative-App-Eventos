import * as React from "react";
import { styles } from "./styles";
import { View, TextInput, Image, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { USERS } from "../../utils/users";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/userSlice";

export function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // simulate auth
  const [listUser] = useState(USERS);
  const dispatch = useDispatch();

  function handleSignIn() {
    const user = listUser.find(
      (user) =>
        (user.email === email || user.name === email) &&
        user.password === password
    );
    dispatch(
      changeUser({
        id: user?.id,
        name: user?.name,
        email: user?.email,
        type: user?.type,
        avatar: user?.avatar,
        cpf: user?.cpf,
        password: user?.password,
      })
    );
    if (user) {
      navigation.navigate("Main");
    } else {
      console.log("Error!");
    }
  }
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
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCorrect={false}
          placeholder="Senha"
        />
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.buttonLogin} onPress={handleSignIn}>
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

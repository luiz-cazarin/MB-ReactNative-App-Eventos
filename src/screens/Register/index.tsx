import * as React from "react";
import { useState } from "react";
import { styles } from "./styles";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Header } from "../../components/layout/Header";
import { Button } from "../../components/layout/Button";
import { InputArea } from "../../components/layout/InputArea";

import { ToggleButton } from "react-native-paper";

export function Register({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("https://www.w3schools.com/howto/img_avatar.png");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [type, setType] = useState("");

  function signUp() {
    const user = {
      name: name,
      email: email,
      avatar: avatar,
      password: password,
      cpf: cpf,
      type: type,
    };
    if (user.name && user.email && user.password && user.type) {
      // async -> try -> axios -> post -> signUp
      console.log("Conta criada");
      navigation.navigate("Main");
    } else {
      // validate form -> show errors -> try again
      console.log("try again!");
    }
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          title="Cadastro"
        />
        <ScrollView>
          <View style={{ padding: 20 }}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>SignUp</Text>
              <Text style={{ color: "#A5A5A5", fontWeight: "600" }}>
                Informe os seus dados
              </Text>
            </View>
            <InputArea
              title="URL da imagem"
              placeholder="https://"
              value={avatar}
              onChangeText={setAvatar}
            />
            <InputArea
              title="Nome"
              placeholder="Nome completo"
              value={name}
              onChangeText={setName}
            />
            <InputArea
              title="E-mail"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
            />
            <InputArea
              title="Senha"
              placeholder="********"
              value={password}
              onChangeText={setPassword}
            />
            <InputArea
              title="CPF"
              placeholder="Apenas numeros"
              value={cpf}
              onChangeText={setCpf}
            />
            <InputArea
              title="Tipo de usuario"
              placeholder="0 para organizador 1 para cliente"
              value={type}
              editable={false}
            />
            <ToggleButton.Row
              value={type}
              onValueChange={(type) => setType(type)}
            >
              <ToggleButton icon="account-tie" value="Organizador" />
              <ToggleButton icon="account" value="Cliente" />
            </ToggleButton.Row>
            <Button
              text="CRIAR CONTA"
              color="#ffff"
              backgroundColor="#404040"
              event={signUp}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

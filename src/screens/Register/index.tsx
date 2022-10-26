import * as React from "react";
import { useState } from "react";
import { styles } from "./styles";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Header } from "../../components/layout/Header";
import { Button } from "../../components/layout/Button";
import { InputArea } from "../../components/layout/InputArea";

export function Register({ navigation }: any) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [type, setType] = useState(null);

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
      console.log("Conta criada");
      navigation.navigate("Main");
    } else {
      console.log("!");
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
              onChangeText={setType}
            />
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

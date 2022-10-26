import * as React from "react";
import { styles } from "./styles";
import {
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Header } from "../../components/layout/Header";
import { Button } from "../../components/layout/Button";
import { InputArea } from "../../components/layout/InputArea";

export function Register({ navigation }: any) {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          title="Cadastro"
        />
        <View style={{ padding: 20 }}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SignUp</Text>
            <Text style={{ color: "#A5A5A5", fontWeight: "600" }}>
              Informe os seus dados
            </Text>
          </View>
          <InputArea title="Nome" />
          <InputArea title="E-mail" />
          <InputArea title="Senha" />
          <InputArea title="CPF" />
          <InputArea title="Tipo de conta" />
          <Button
            text="CRIAR CONTA"
            color="#ffff"
            backgroundColor="#404040"
            event={() => console.log("cadastrar")}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

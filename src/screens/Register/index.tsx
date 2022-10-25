import * as React from "react";
import { styles } from "./styles";
import { useState } from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Checkbox } from "react-native-paper";
import { Header } from "../../components/layout/Header";
import { Button } from "../../components/layout/Button";
import { TextLabel } from "../../components/layout/TextLabel";
import { InputLabel } from "../../components/layout/InputLabel";

export function Register({ navigation }: any) {
  const [status, setStatus] = useState("unchecked");
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          title="Cadastro"
          textRight="    "
        />
        <View style={{ padding: 20 }}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SignUp</Text>
            <Text style={{ color: "#A5A5A5", fontWeight: "600" }}>
              Informe os seus dados
            </Text>
          </View>
          <InputLabel title="Nome" />
          <InputLabel title="E-mail" />
          <InputLabel title="Senha" />
          <InputLabel title="CPF" />
          <InputLabel title="Tipo de conta" />
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

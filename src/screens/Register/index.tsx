import * as React from "react";
import { styles } from "./styles";
import { useState } from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Checkbox } from "react-native-paper";

export function Register({ navigation }) {
  const [status, setStatus] = useState("unchecked");
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={22}
            onPress={() => {
              navigation.goBack();
            }}
          ></Icon>
          <Text style={styles.title}>Cadastro</Text>
          <View style={{ width: 20 }} />
        </View>
        <View style={{ padding: 30 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#F0F0F0",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Nome completo"
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#F0F0F0",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Email"
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#F0F0F0",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Senha"
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#F0F0F0",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="CPF"
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              color="#F0F0F0"
              uncheckedColor="#F0F0F0"
              status="unchecked"
            />
            <Text>
              Accept all
              <Text style={{ color: "#3DA6E1", fontWeight: "600" }}>
                {" "}
                terms & services
              </Text>
            </Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>CRIAR CONTA</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Background>
  );
}

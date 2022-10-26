import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";
import { InputArea } from "../../../components/layout/InputArea";
import { useEffect, useState } from "react";
export function UserProfile({ navigation }: any) {
  const [user, setUser] = useState({
    name: "Luiz Claudio",
    email: "cazarin.junior@gmail.com",
    password: "******",
    cpf: "123.123.123.12",
    type: "organizer",
  });
  const [editable, setEditable] = useState(false);
  const [color, setColor] = useState("false");

  function handleEditable() {
    let aux = editable;
    setEditable((aux = !aux));
  }
  useEffect(() => {
    if (editable) {
      setColor("#3B7CDE");
    } else {
      setColor("#000000");
    }
  }, [editable]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View>
          <Header
            iconLeft="arrow-back-ios"
            eventLeft={() => navigation.goBack()}
            title="Minha conta"
            iconRight="edit"
            eventRight={handleEditable}
            rightColor={color}
          />
          <ScrollView>
            <View style={styles.boxProfile}>
              <Image
                style={styles.profileImg}
                source={require("../../../assets/logo-mb.png")}
              />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <InputArea editable={editable} title="Nome" value={user.name} />
              <InputArea
                editable={editable}
                title="E-mail"
                value={user.email}
              />
              <InputArea
                editable={editable}
                title="Password"
                value={user.password}
              />
              <InputArea editable={editable} title="CPF" value={user.cpf} />
              <InputArea
                editable={editable}
                title="Tipo de conta"
                value={user.type}
              />
              <Button
                text="Salvar alterações"
                color="#ffff"
                backgroundColor="#6AD03A"
                event={() => console.log("salvou alteracoes")}
              />
              <Button
                text="Apagar conta"
                color="#ffff"
                backgroundColor="#E74A4A"
                event={() => console.log("Apagar conta")}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Background>
  );
}

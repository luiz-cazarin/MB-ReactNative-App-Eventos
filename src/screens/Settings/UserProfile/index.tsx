import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { View, Image, ScrollView } from "react-native";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";
import { InputArea } from "../../../components/layout/InputArea";
import { useEffect, useState } from "react";
import { ToggleButton } from "react-native-paper";
import { USERS } from "../../../utils/users";

export function UserProfile({ navigation }: any) {
  const [users, setUsers] = useState(USERS);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [type, setType] = useState("Cliente");
  const [avatar, setAvatar] = useState("");

  const [editable, setEditable] = useState(false);
  const [color, setColor] = useState("false");

  function handleEditable() {
    let aux = editable;
    setEditable((aux = !aux));
  }
  function updateAccount() {
    console.log("update account");
    navigation.navigate('home')
  }

  function deleteAccount() {
    console.log("deleteAccount");
    // async -> try -> axios -> post -> deleteAccount
    navigation.navigate("login");
  }

  useEffect(() => {
    // simulate get User auth
    let user = users.find((user) => user.id === "1");
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setPassword(user?.password);
      setCpf(user?.cpf);
      setType(user?.type);
      setAvatar(user?.avatar);
      console.log(user);
    }
  }, []),
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
              <Image style={styles.profileImg} source={{ uri: avatar }} />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <InputArea
                editable={editable}
                title="Nome"
                value={name}
                onChangeText={setName}
              />
              <InputArea
                editable={editable}
                title="E-mail"
                value={email}
                onChangeText={setEmail}
              />
              <InputArea
                editable={editable}
                title="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
              />
              <InputArea
                editable={editable}
                title="CPF"
                value={cpf}
                onChangeText={setCpf}
              />
              <InputArea editable={false} title="Tipo de conta" value={type} />
              <ToggleButton.Row
                value={type}
                onValueChange={(type) => setType(type)}
              >
                <ToggleButton icon="account-tie" value="Organizador" />
                <ToggleButton icon="account" value="Cliente" />
              </ToggleButton.Row>
              <View style={{ marginBottom: 100 }}>
                <Button
                  text="Salvar alterações"
                  color="#ffff"
                  backgroundColor="#6AD03A"
                  event={updateAccount}
                />
                <Button
                  text="Apagar conta"
                  color="#ffff"
                  backgroundColor="#E74A4A"
                  event={deleteAccount}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Background>
  );
}

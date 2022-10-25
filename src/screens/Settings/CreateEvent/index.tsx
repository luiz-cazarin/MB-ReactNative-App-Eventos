import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { Text, View } from "react-native";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";
import { TextInput } from "react-native-paper";

export function CreateEvent({ route, navigation }: any) {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          title="Criar Evento"
          textRight="     "
        />
        <View style={styles.box}>
          <TextInput />
          <Button
            text="CRIAR EVENTO"
            color="#ffff"
            backgroundColor="#6AD03A"
            event={() => console.log("criou o evento")}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

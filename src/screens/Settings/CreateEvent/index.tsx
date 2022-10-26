import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { View, ScrollView } from "react-native";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";
import { InputArea } from "../../../components/layout/InputArea";
import { FormEvent } from "../../../components/FormEvent";

export function CreateEvent({ route, navigation }: any) {
  console.log(route.params)
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          title="Criar Evento"
        />
        <ScrollView>
          <FormEvent navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

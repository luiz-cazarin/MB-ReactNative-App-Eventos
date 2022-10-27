import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { ScrollView } from "react-native";
import { Header } from "../../../components/layout/Header";
import { FormEvent } from "../../../components/FormEvent";

export function CreateEvent({ route, navigation }: any) {
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

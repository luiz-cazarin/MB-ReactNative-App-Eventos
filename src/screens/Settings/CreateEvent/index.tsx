import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { Text, View, ScrollView } from "react-native";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";
import { InputArea } from "../../../components/layout/InputArea";

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
        <ScrollView>
          <View style={styles.box}>
            <InputArea title="URL da imagem" />
            <InputArea title="Nome do evento" />
            <InputArea title="Descrição do evento" multiline={true} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <InputArea mid={true} title="Inicio" placeholder="__/__/__" />
              <InputArea mid={true} title="Fim" placeholder="__/__/__" />
            </View>
            <InputArea title="Nome do local" />
            <InputArea title="CEP do local" />
            <InputArea title="Categoria do evento" placeholder="Empresa" />
            <InputArea title="Valor do ingreço" placeholder="R$" />
            <Button
              text="CRIAR EVENTO"
              color="#ffff"
              backgroundColor="#6AD03A"
              event={() => console.log("criou o evento")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

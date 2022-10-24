import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Text, View, Image } from "react-native";
export function Profile() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text>Perfil</Text>
        <View>
          <Image
            style={{ borderRadius: 150, marginVertical: 28 }}
            source={require("../../assets/logo.png")}
          ></Image>
          <View>
            <Text>Luiz Claudio</Text>
            <Text>cazarin.junior@gmail.com</Text>
          </View>
        </View>
        <View>
          <Text>Minha conta</Text>
        </View>
      </SafeAreaView>
    </Background>
  );
}

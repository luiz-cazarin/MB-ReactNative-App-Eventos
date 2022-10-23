import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Text, View, Image } from "react-native";
export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Perfil</Text>
        <View>
          <Image
            source={{
              uri: "https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg",
            }}
          ></Image>
          <View>
            <Text>Luiz Claudio</Text>
            <Text>cazarin.junior@gmail.com</Text>
          </View>
        </View>
        <View>
          <Text>Minha conta</Text>
        </View> */}
    </SafeAreaView>
  );
}

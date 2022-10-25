import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
export function Profile() {
  const navigation = useNavigation();
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Perfil</Text>
          <View style={styles.boxProfile}>
            <Image
              style={styles.profileImg}
              source={require("../../assets/logo.png")}
            />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 18 }}>
                Luiz Cazarin
              </Text>
              <Text style={{ color: "#2C2C2C", fontSize: 13 }}>
                cazarin.junior@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.boxOptions}>
            <Text style={styles.subtitle}>Minha conta</Text>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("user-profile")}
            >
              <Text>Editar perfil</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("user-events")}
            >
              <Text>Meus eventos</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("create-event")}
            >
              <Text>Criar evento</Text>
            </Pressable>
            <Text style={styles.subtitle}>Central de ajuda</Text>
            <Pressable style={styles.button}>
              <Text>Suporte</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.boxFooter}>
          <Pressable style={styles.buttonExit}>
            <Text style={{ color: "#E74A4A" }}>Sair da conta</Text>
          </Pressable>
          <Text style={{ color: "#B0B0B0" }}>VERSÃO 1.0</Text>
          <Text style={{ color: "#B0B0B0" }}>
            Desenvolvido por: Luiz Claudio
          </Text>
        </View>
      </SafeAreaView>
    </Background>
  );
}

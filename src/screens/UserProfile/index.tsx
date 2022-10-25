import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
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
export function UserProfile({ navigation }) {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.header}>
            <Icon
              name="arrow-back-ios"
              size={22}
              onPress={() => {
                navigation.goBack();
              }}
            ></Icon>
            <Text style={styles.title}>Minha conta</Text>
            <View style={{ width: 20 }} />
          </View>
          <ScrollView>
            <View style={styles.boxProfile}>
              <Image
                style={styles.profileImg}
                source={require("../../assets/logo.png")}
              />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontWeight: "bold", paddingVertical: 5 }}>
                Nome
              </Text>
              <TextInput style={styles.label} maxLength={12} placeholder="" />
              <Text style={{ fontWeight: "bold", paddingVertical: 5 }}>
                E-mail
              </Text>
              <TextInput style={styles.label} maxLength={12} placeholder="" />
              <Text style={{ fontWeight: "bold", paddingVertical: 5 }}>
                Password
              </Text>
              <TextInput style={styles.label} maxLength={12} placeholder="" />
              <Text style={{ fontWeight: "bold", paddingVertical: 5 }}>
                CPF
              </Text>
              <TextInput style={styles.label} maxLength={12} placeholder="" />
              <Text style={{ fontWeight: "bold", paddingVertical: 5 }}>
                Tipo de conta
              </Text>
              <TextInput style={styles.label} maxLength={12} placeholder="" />
              <View style={styles.boxButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Salvar alterações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Apagar conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Background>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Text, View, Image, Pressable } from "react-native";
export function UserProfile() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Minha conta</Text>
        </View>
      </SafeAreaView>
    </Background>
  );
}

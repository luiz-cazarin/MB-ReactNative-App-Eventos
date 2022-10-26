import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
export function EditEvent({ route }: any) {
  const [type, setType] = useState(false);
  useEffect(() => {
    if (route.params.id === -1) {
      setType(true);
    } else {
      setType(false);
    }
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Editar Evento</Text>
        </View>
      </SafeAreaView>
    </Background>
  );
}

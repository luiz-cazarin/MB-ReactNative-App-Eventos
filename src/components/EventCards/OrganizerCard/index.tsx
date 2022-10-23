import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function OrganizerCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organizador</Text>
      <View style={styles.boxOrganizer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.imgOrganizer}
        ></Image>
        <Text style={styles.name}>DF eventos</Text>
      </View>
    </View>
  );
}

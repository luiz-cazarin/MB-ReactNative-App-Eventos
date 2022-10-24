import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function OrganizerCard({ name, avatar }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organizador</Text>
      <View style={styles.boxOrganizer}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.imgOrganizer}
        ></Image>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

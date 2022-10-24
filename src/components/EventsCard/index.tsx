import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function EventsCard({ event }: any) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("event", {
          id: event.id,
          name: event.name,
          local: event.local,
          cep: event.cep,
          initalDate: event.initalDate,
          finalDate: event.finalDate,
          img: event.img,
          description: event.description,
          organizer: event.organizer,
        })
      }
    >
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: event.img }} />
        <Text style={styles.dateTime}>SEX, 21 OUT 23:00</Text>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.local}>{event.local}</Text>
      </View>
    </Pressable>
  );
}

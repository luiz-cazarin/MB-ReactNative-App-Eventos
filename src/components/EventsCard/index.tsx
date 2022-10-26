import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

export interface Props {
  event: {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    local: string;
    initalDate: string;
    finalDate: string;
    img: string;
    cep: string;
    organizer: object;
  };
  navigation: any;
}

export function EventsCard({ event, navigation }: Props) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("event", {
          id: event.id,
          name: event.name,
          price: event.price,
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
      <View style={{ maxWidth: 160 }}>
        <Image style={styles.img} source={{ uri: event.img }} />
        <Text style={styles.dateTime}>
          {event.initalDate} - {event.finalDate}
        </Text>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.local}>{event.local}</Text>
      </View>
    </Pressable>
  );
}

import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

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
  };
}

export function EventsCard({ event }: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: event.img }} />
      <Text style={styles.dateTime}>SEX, 21 OUT 23:00</Text>
      <Text style={styles.title} onPress={() => navigation.navigate("login")}>
        {event.name}
      </Text>
      <Text style={styles.local}>{event.local}</Text>
    </View>
  );
}

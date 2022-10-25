import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text, View, Image, Pressable } from "react-native";

export function CardEvent({ item, navigation }: any) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("event", {
          id: item.id,
          name: item.name,
          local: item.local,
          cep: item.cep,
          price: item.price,
          initalDate: item.initalDate,
          finalDate: item.finalDate,
          img: item.img,
          organizer: item.organizer,
          description: item.description,
        })
      }
    >
      <View style={styles.cardEvent}>
        <View style={styles.cardEventBanner}>
          <Image style={styles.banner} source={{ uri: item.img }} />
        </View>
        <View style={styles.cardEventDetails}>
          <Text style={styles.eventData}>
            {item.initalDate}
            {` - `}
            {item.finalDate}
          </Text>
          <Text style={styles.eventName}>{item.name}</Text>
          <Text style={styles.eventLocal}>{item.local}</Text>
        </View>
      </View>
    </Pressable>
  );
}

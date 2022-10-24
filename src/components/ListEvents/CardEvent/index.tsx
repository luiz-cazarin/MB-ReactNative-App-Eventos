import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function CardEvent({ item }: any) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("event", { event: item })}>
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

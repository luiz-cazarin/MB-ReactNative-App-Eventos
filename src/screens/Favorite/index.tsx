import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { ScrollView, Text, View, Image, FlatList } from "react-native";
import { useState } from "react";
import { CardEvent } from "../../components/ListEvents/CardEvent";
import { EVENTS } from "../../utils/events";

export function Favorite() {
  const [events, setEvents] = useState(EVENTS);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subtitle}>Eventos</Text>
        <View style={styles.listEvents}>
          <FlatList
            data={events}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => <CardEvent item={item} />}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

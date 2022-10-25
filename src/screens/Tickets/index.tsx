import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { ScrollView, Text, View, Image, FlatList } from "react-native";
import { useState } from "react";
import { Background } from "../../components/Background";
import { EVENTS } from "../../utils/events";
import { CardEvent } from "../../components/ListEvents/CardEvent";

export function Tickets({ navigation }: any) {
  const [events, setEvents] = useState(EVENTS);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Ingressos</Text>
        <Text style={styles.subtitle}>Ativos</Text>
        <View style={styles.listEvents}>
          <FlatList
            data={events}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <CardEvent navigation={navigation} item={item} />
            )}
          />
        </View>
        <Text style={styles.subtitle}>Encerrados</Text>
        <View style={styles.listEvents}>
          <FlatList
            data={events}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <CardEvent navigation={navigation} item={item} />
            )}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { ScrollView, Text, View } from "react-native";
import { useState } from "react";

export function Tickets() {
  const [events, setEvents] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Ingressos</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subtitle}>Ativos</Text>
          <View style={styles.listEvents}>
            {events.map((event, idx) => (
              <View style={styles.cardEvent}>
                <View style={styles.cardEventBanner}>
                  <Text>Banner</Text>
                </View>
                <View style={styles.cardEventDetails}>
                  <Text>Details</Text>
                </View>
              </View>
            ))}
          </View>
          <Text style={styles.subtitle}>Encerrados</Text>
          <View style={styles.listEvents}>
            {events.map((event, idx) => (
              <View style={styles.cardEvent}>
                <View style={styles.cardEventBanner}>
                  <Text>Banner</Text>
                </View>
                <View style={styles.cardEventDetails}>
                  <Text>Details</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView> */}
    </SafeAreaView>
  );
}

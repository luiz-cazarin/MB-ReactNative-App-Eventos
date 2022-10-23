import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { ScrollView, Text, View, Image, FlatList } from "react-native";
import { useState } from "react";

export function Favorite() {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: "SEX, 26 OUT 13:00",
      name: "nome 1",
      local: "UCB Brasilia, DF",
    },
    {
      id: 2,
      date: "SEX, 27 OUT 13:00",
      name: "nome 2",
      local: "UCB Brasilia, DF",
    },
    {
      id: 3,
      date: "SEX, 28 OUT 13:00",
      name: "nome 3",
      local: "UCB Brasilia, DF",
    },
    {
      id: 4,
      date: "SEX, 29 OUT 13:00",
      name: "nome 4",
      local: "UCB Brasilia, DF",
    },
  ]);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subtitle}>Eventos</Text>
        <View style={styles.listEvents}>
          <FlatList
            data={events}
            renderItem={({ item, index }) => (
              <View style={styles.cardEvent}>
                <View style={styles.cardEventBanner}>
                  <Image source={require("../../assets/logo.png")} />
                </View>
                <View style={styles.cardEventDetails}>
                  <Text style={styles.eventData}>{item.date}</Text>
                  <Text style={styles.eventName}>{item.name}</Text>
                  <Text style={styles.eventLocal}>{item.local}</Text>
                </View>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />

          {/* <ScrollView>
            {events.map((event, idx) => (
              <View style={styles.cardEvent}>
                <View style={styles.cardEventBanner}>
                  <Image
                    source={{
                      uri: "https://www.officetotal.com.br/wp-content/uploads/2022/08/consultoria-de-ti-o-que-faz.jpg",
                    }}
                  />
                </View>
                <View style={styles.cardEventDetails}>
                  <Text style={styles.eventData}>{event.date}</Text>
                  <Text style={styles.eventName}>{event.name}</Text>
                  <Text style={styles.eventLocal}>{event.local}</Text>
                </View>
              </View>
            ))}
          </ScrollView> */}
        </View>
      </SafeAreaView>
    </Background>
  );
}

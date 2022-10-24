import { View, Text, ViewProps, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";
import { SetStateAction, useEffect, useState } from "react";
import { CategoryCard } from "../CategoryCard";
import { RecommendationsCard } from "../RecommendationsCard";
import { EventsCard } from "../EventsCard";
import { EVENTS } from "../../utils/events";

export function BodyCardHome({ eventName }: any) {
  const [recomendedEvents, setRecomendedEvents] = useState(EVENTS);
  const [events, setEvents] = useState(EVENTS);

  function filteredList() {
    return events.filter((item) => item.name.includes(eventName));
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Recomendações</Text>
          <FlatList
            data={recomendedEvents}
            renderItem={({ item, index }) => (
              <RecommendationsCard event={item} />
            )}
            keyExtractor={(event) => event.id}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <Text style={styles.title}>Eventos</Text>
        <View style={styles.containerEvents}>
          <View style={styles.boxEvents}>
            {events.map((event, idx) => (
              <EventsCard event={event} key={event.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

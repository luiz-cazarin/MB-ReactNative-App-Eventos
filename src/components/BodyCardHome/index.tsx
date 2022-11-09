import { View, Text, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { RecommendationsCard } from "../RecommendationsCard";
import { EventsCard } from "../EventsCard";
import { useSelector } from "react-redux";

export function BodyCardHome({ eventName, navigation }: any) {
  const events = useSelector((state: any) => state.events.arr);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    let newList = events.filter((el: any) =>
      el.name.toLowerCase().includes(eventName.toLowerCase())
    );
    setFilterList(newList);
  }, [eventName]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Recomendações</Text>
          <FlatList
            data={events}
            renderItem={({ item, index }) => (
              <RecommendationsCard navigation={navigation} event={item} />
            )}
            keyExtractor={(event) => event.id}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <Text style={styles.title}>Eventos</Text>
        <View style={styles.containerEvents}>
          <View style={styles.boxEvents}>
            {filterList.map((event: any, idx: any) => (
              <EventsCard
                navigation={navigation}
                event={event}
                key={event.id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

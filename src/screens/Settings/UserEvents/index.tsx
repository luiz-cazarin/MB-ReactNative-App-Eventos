import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { FlatList, View } from "react-native";
import { useState } from "react";
import { Header } from "../../../components/layout/Header";
import { EventCardActions } from "../../../components/EventCardActions";
import { EVENTS } from "../../../utils/events";
import { useDispatch, useSelector } from "react-redux";
import { removeEvent } from "../../../store/eventsSlice";

export function UserEvents({ navigation }: any) {
  const state = useSelector((state: any) => state.events.arr);
  const dispatch = useDispatch();

  const [events, updateEvents] = useState(state);

  function deleteEvent(data: any) {
    dispatch(removeEvent(data.id));
    // update screen
    updateEvents(events.filter((item: any) => item.id !== data.id));
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.navigate('profile')}
          title="Meus eventos"
        />
        <FlatList
          data={events}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <EventCardActions
              event={item}
              navigation={navigation}
              deleteEvent={deleteEvent}
            />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}

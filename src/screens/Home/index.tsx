import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { BodyCardHome } from "../../components/BodyCardHome";
import { Background } from "../../components/Background";
import { useState } from "react";
import { EVENTS } from "../../utils/events";
import { Routes } from "../../routes";

export function Home() {
  const [recomendedEvents, setRecomendedEvents] = useState(EVENTS);
  const [events, setEvents] = useState(EVENTS);

  return (
    <SafeAreaView style={styles.container}>
      <Heading recomendedEvents={recomendedEvents} events={events} />
      <BodyCardHome />
    </SafeAreaView>
  );
}

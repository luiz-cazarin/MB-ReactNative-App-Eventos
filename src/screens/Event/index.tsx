import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";

import { DetailsCard } from "../../components/EventCards/DetailsCard";
import { DescriptionCard } from "../../components/EventCards/DescriptionCard";

import {
  ScrollView,
  Text,
  View,
  Image,
  Button,
  BackHandler,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { OrganizerCard } from "../../components/EventCards/OrganizerCard";
import Icon from "react-native-vector-icons/MaterialIcons";

export function Event() {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: "SEX, 26 OUT 13:00",
      name: "nome 1",
      local: "UCB Brasilia, DF",
    },
  ]);

  const backAction = () => {
    BackHandler.exitApp();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Button title="back" onPress={backAction}></Button>
          <Icon name="arrow-back-ios" size={22}></Icon>
          <Text>Evento</Text>
          <Icon name="favorite-outline" size={28}></Icon>
        </View>
        <DetailsCard />
        <View style={styles.divisor}></View>
        <DescriptionCard />
        <View style={styles.divisor}></View>
        <OrganizerCard />
        <View style={styles.boxButton}>
          <Button title="VER INGRESSOS" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";

import { DetailsCard } from "../../components/EventCards/DetailsCard";
import { DescriptionCard } from "../../components/EventCards/DescriptionCard";

import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { OrganizerCard } from "../../components/EventCards/OrganizerCard";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export function Event({ route }: any) {
  const navigation = useNavigation();
  function addFavoriteEvent() {}
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Icon
              name="arrow-back-ios"
              size={22}
              onPress={() => {
                navigation.navigate("home");
              }}
            ></Icon>
            <Text>Evento</Text>
            <Icon
              name="favorite-outline"
              size={28}
              onPress={addFavoriteEvent}
            ></Icon>
          </View>
          <DetailsCard
            name={route.params.name}
            local={route.params.local}
            cep={route.params.cep}
            initalDate={route.params.initalDate}
            finalDate={route.params.finalDate}
            img={route.params.img}
          />
          <View style={styles.divisor}></View>
          <DescriptionCard description={route.params.description} />
          <View style={styles.divisor}></View>
          <OrganizerCard
            name={route.params.organizer.name}
            avatar={route.params.organizer.avatar}
          />
          <View style={styles.boxButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("order-tikets", {
                  eventId: route.params.id,
                })
              }
            >
              <Text style={styles.text}>VER INGRESSOS</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

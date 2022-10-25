import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";

import { DetailsCard } from "../../components/EventCards/DetailsCard";
import { DescriptionCard } from "../../components/EventCards/DescriptionCard";

import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { OrganizerCard } from "../../components/EventCards/OrganizerCard";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "../../components/layout/Button";
import { Header } from "../../components/layout/Header";

export function Event({ route, navigation }: any) {
  function addFavoriteEvent() {}
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            iconLeft="arrow-back-ios"
            eventLeft={() => navigation.goBack()}
            title="Evento"
            iconRight="favorite-outline"
            eventRight={() => console.log("Evento favoritado")}
          />
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
            <Button
              text="VER INGRESSOS"
              color="#ffff"
              backgroundColor="#6AD03A"
              event={() =>
                navigation.navigate("order-tikets", {
                  eventId: route.params.id,
                  name: route.params.name,
                  price: route.params.price,
                  initialDate: route.params.initalDate,
                })
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

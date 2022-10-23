import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text, View, Image } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { useState } from "react";

export function DetailsCard() {
  return (
    <View>
      <View style={styles.banner}>
        <Image
          style={styles.bannerImg}
          source={require("../../../assets/logo.png")}
        ></Image>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Srum</Text>
        <View style={styles.boxDetails}>
          <Icon name="md-location-outline" size={22} />
          <Text style={styles.descriptionDetail}>Evento presencial: UCB</Text>
        </View>
        <Text style={styles.location}>Brasilia, DF</Text>
        <View style={styles.boxDetails}>
          <Icon name="time-outline" size={22} />
          <Text style={styles.descriptionDetail}>
            Sexta, 26 Out - Sabado, 27 Out
          </Text>
        </View>
      </View>
    </View>
  );
}

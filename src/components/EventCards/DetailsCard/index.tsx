import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text, View, Image } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export interface Props {
  name: string;
  local: string;
  cep: string;
  initalDate: string;
  finalDate: string;
  img: string;
}

export function DetailsCard({
  name,
  local,
  cep,
  initalDate,
  finalDate,
  img,
}: Props) {
  return (
    <View>
      <View style={styles.banner}>
        <Image style={styles.bannerImg} source={{ uri: img }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.boxDetails}>
          <Icon name="md-location-outline" size={22} />
          <Text style={styles.descriptionDetail}>{local}</Text>
        </View>
        <Text style={styles.location}>{cep}</Text>
        <View style={styles.boxDetails}>
          <Icon name="time-outline" size={22} />
          <Text style={styles.descriptionDetail}>
            {initalDate} - {finalDate}
          </Text>
        </View>
      </View>
    </View>
  );
}

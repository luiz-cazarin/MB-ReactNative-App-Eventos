import { View, Text } from "react-native";
import { styles } from "./styles";

export function DescriptionCard({ description }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descrição do evento</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

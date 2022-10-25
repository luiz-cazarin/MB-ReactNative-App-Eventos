import { View, Text } from "react-native";
import { styles } from "./styles";

export function TextLabel({ title, text }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.boxLabel}>
        <Text style={styles.label}>{text}</Text>
      </View>
    </View>
  );
}

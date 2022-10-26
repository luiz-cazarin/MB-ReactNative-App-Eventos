import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#3DA6E1"></ActivityIndicator>
    </View>
  );
}

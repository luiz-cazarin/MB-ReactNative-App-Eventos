import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export function EventCardActions({ event, navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={{ color: "red" }}>SEX, 26 OUT 13:00</Text>
          <Text style={{ fontWeight: "600", paddingVertical: 3 }}>Scrum</Text>
          <Text style={{ color: "#5A5A5A" }}>UCB Brasilia, DF</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Icon
            style={{ padding: 8 }}
            name="edit"
            size={28}
            color="#3B7CDE"
            onPress={() => navigation.navigate("edit-event", { id: 0 })}
          />
          <Icon
            style={{ padding: 8 }}
            name="delete-outline"
            size={28}
            color="#EE3C3C"
            onPress={() => console.log("delete")}
          />
        </View>
      </View>
    </View>
  );
}

import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export function EventCardActions({ event, navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={{ color: "red" }}>
            {event.initalDate} - {event.finalDate}
          </Text>
          <Text style={{ fontWeight: "600", paddingVertical: 3 }}>
            {event.name}
          </Text>
          <Text style={{ color: "#5A5A5A" }}>{event.local}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Icon
            style={{ padding: 8 }}
            name="edit"
            size={28}
            color="#3B7CDE"
            onPress={() => navigation.navigate("edit-event", { event: event })}
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

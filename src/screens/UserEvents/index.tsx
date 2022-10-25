import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Text, View, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export function UserEvents({ navigation }) {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={22}
            onPress={() => {
              navigation.goBack();
            }}
          ></Icon>
          <Text style={styles.title}>Meus eventos</Text>
          <View style={{ width: 20 }} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 2,
            padding: 20,
            borderRadius: 10,
            borderColor: "#D9D9D9",
          }}
        >
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
              onPress={() => navigation.navigate("create-event", { id: 1 })}
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
      </SafeAreaView>
    </Background>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text, View, TouchableOpacity } from "react-native";
import { Background } from "../../components/Background";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { EVENTS } from "../../utils/events";

export function OrderTickets({ route }: any) {
  const [dataBaseTikets, setDataBaseTikets] = useState(EVENTS);
  const [ticket, setTicket] = useState({
    name: "",
    initalDate: "",
    price: "",
  });
  const [amountTicket, setAmountTicket] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    // axios.get...
    let currTicket = dataBaseTikets.filter((item) => item.id === route.params.eventId);
    setTicket(currTicket[0]);
  }, []);

  function minusTicket() {
    let amount = amountTicket - 1;
    if (amount >= 0) {
      setAmountTicket(amount);
    }
  }

  function plusTicket() {
    let amount = amountTicket + 1;
    setAmountTicket(amount);
  }

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
          <Text
            onPress={() => {
              navigation.navigate("home", {});
            }}
          >
            Cancelar
          </Text>
        </View>
        <View style={styles.headerPrice}>
          <Text style={styles.title}>Ingressos</Text>
          <Text style={styles.totalPrice}>R$ 30,00</Text>
        </View>
        <View style={styles.boxTicket}>
          <View style={styles.boxDescriptions}>
            <Text style={styles.nameTicket}>Tiket: {ticket.name}</Text>
            <Text>Vendas até {ticket.initalDate.toString()}</Text>
            <Text style={styles.count}>
              <Icon2
                name="minuscircleo"
                size={24}
                color="#3473EF"
                onPress={minusTicket}
              />
              <Text style={{ fontSize: 22 }}> {amountTicket} </Text>
              <Icon2
                name="pluscircleo"
                size={24}
                color="#3473EF"
                onPress={plusTicket}
              />
            </Text>
          </View>
          <View>
            <Text style={styles.ticketPrice}>R$ {ticket.price}</Text>
          </View>
        </View>
        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("order-finish")}
          >
            <Text style={styles.text}>COMPRAR INGRESSO</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { Background } from "../../../components/Background";
import Icon2 from "react-native-vector-icons/AntDesign";
import { useState, useEffect } from "react";
import { EVENTS } from "../../../utils/events";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";

export function OrderTickets({ route, navigation }: any) {
  const [dataBaseTikets, setDataBaseTikets] = useState(EVENTS);
  const [amountTicket, setAmountTicket] = useState(0);

  useEffect(() => {
    // axios.get...
    let currTicket = dataBaseTikets.filter(
      (item) => item.id === route.params.eventId
    );
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
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          textRight="Cancelar"
          eventRight={() => console.log(navigation.navigate("home"))}
        />
        <View style={styles.headerPrice}>
          <Text style={styles.title}>Ingressos</Text>
          <Text style={styles.totalPrice}>
            R$ {route.params.price.toFixed(2)}
          </Text>
        </View>
        <View style={styles.box}>
          <View style={styles.boxTicket}>
            <View>
              <Text style={styles.nameTicket}>Tiket: {route.params.name}</Text>
              <Text>Vendas até {route.params.initialDate.toString()}</Text>
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
              <Text style={styles.ticketPrice}>
                R$ {route.params.price.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonPosition}>
          <Button
            text="COMPRAR INGRESSO"
            color="#ffff"
            backgroundColor="#6AD03A"
            event={() => navigation.navigate("order-finish")}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

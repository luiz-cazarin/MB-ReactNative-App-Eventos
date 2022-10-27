import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { Background } from "../../../components/Background";
import Icon2 from "react-native-vector-icons/AntDesign";
import { useState, useEffect } from "react";
import { EVENTS } from "../../../utils/events";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";
import { useSelector } from "react-redux";
export function OrderTickets({ route, navigation }: any) {
  const state = useSelector((state: any) => state.user);
  const [events] = useState(EVENTS);
  const [amountTicket, setAmountTicket] = useState(1);
  const [totalTicket, setTotalTicket] = useState(route.params.price);

  const [userAuth] = useState(state);

  function minusTicket() {
    setAmountTicket(amountTicket > 0 ? amountTicket - 1 : amountTicket);
  }

  function plusTicket() {
    setAmountTicket(amountTicket + 1);
  }

  useEffect(() => {
    let total = route.params.price * amountTicket;
    setTotalTicket(total);
  }, [amountTicket]);

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
          <Text style={styles.totalPrice}>R$ {totalTicket.toFixed(2)}</Text>
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
            event={() => {
              if (amountTicket > 0) {
                navigation.navigate("order-finish", {
                  name: userAuth.name,
                  email: userAuth.email,
                  totalTicket: totalTicket,
                });
              }
            }}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

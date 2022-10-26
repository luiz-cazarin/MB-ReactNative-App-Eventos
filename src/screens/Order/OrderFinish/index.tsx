import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import {
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { Background } from "../../../components/Background";
import { useState, useEffect } from "react";
import { Button } from "../../../components/layout/Button";
import { Header } from "../../../components/layout/Header";
import { TextLabel } from "../../../components/layout/TextLabel";

export function OrderFinish({ navigation }: any) {
  const [user, setUser] = useState({
    id: 1,
    name: "Luiz Claudio Cazarin",
    email: "cazarin.junior@gmial.com",
  });

  useEffect(() => {
    // axios.get...
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header
            iconLeft="arrow-back-ios"
            eventLeft={() => navigation.goBack()}
            textRight="Cancelar"
            eventRight={() => navigation.navigate("home")}
          />
          <View style={{ paddingBottom: 20, paddingHorizontal: 20 }}>
            <Text style={styles.title}>Finalizar compra</Text>
          </View>
          <View style={styles.divisor} />
          <View style={styles.boxUser}>
            <Text style={styles.subTitle}>Informações do participante</Text>
            <TextLabel title="Nome" text={user.name} />
            <TextLabel title="Email" text={user.email} />
          </View>
          <View style={styles.divisor} />
          <View style={styles.boxUser}>
            <Text style={styles.subTitle}>Informação de pagamento</Text>
            <Text style={styles.boxUserTitle}>Numero do cartão *</Text>
            <TextInput
              style={styles.paymentLabel}
              keyboardType="numeric"
              maxLength={12}
              placeholder="____ ____ ____ ____"
            />
            <Text style={styles.boxUserTitle}>Data de expiração *</Text>
            <TextInput
              style={styles.paymentLabel}
              keyboardType="numeric"
              maxLength={4}
              placeholder="__/__"
            />
            <Text style={styles.boxUserTitle}>Codigo de segurança *</Text>
            <TextInput
              style={styles.paymentLabel}
              keyboardType="numeric"
              maxLength={3}
              placeholder=""
            />
          </View>
          <View style={styles.boxTotalPrice}>
            <Text style={{ fontSize: 24 }}>Total</Text>
            <Text style={{ fontSize: 24 }}>R$ 60,00</Text>
          </View>
          <View style={styles.boxButton}>
            <Button
              text="FINALIZAR PAGAMENTO"
              color="#ffff"
              backgroundColor="#6AD03A"
              event={() => console.log("comprou!")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

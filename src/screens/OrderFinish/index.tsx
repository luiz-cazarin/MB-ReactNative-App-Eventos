import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Background } from "../../components/Background";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export function OrderFinish() {
  const navigation = useNavigation();
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
          <View style={styles.headerTitle}>
            <Text style={styles.title}>Finalizar compra</Text>
          </View>
          <View style={styles.boxUser}>
            <Text style={styles.subTitle}>Informações do participante</Text>
            <Text style={styles.boxUserTitle}>Nome</Text>
            <View style={styles.boxUserLabel}>
              <Text style={styles.userLabel}>{user.name}</Text>
            </View>
            <Text style={styles.boxUserTitle}>E-mail</Text>
            <View style={styles.boxUserLabel}>
              <Text style={styles.userLabel}>{user.email}</Text>
            </View>
          </View>
          <View style={styles.divisor} />
          <View style={styles.boxUser}>
            <Text style={styles.subTitle}>Informação de pagamento</Text>
            <Text style={styles.boxUserTitle}>Numero do cartão *</Text>
            <View style={styles.boxUserLabel}>
              <TextInput
                style={styles.paymentLabel}
                keyboardType="numeric"
                maxLength={12}
                placeholder="____ ____ ____ ____"
              />
            </View>
            <Text style={styles.boxUserTitle}>Data de expiração *</Text>
            <View style={styles.boxUserLabel}>
              <TextInput
                style={styles.paymentLabel}
                keyboardType="numeric"
                maxLength={4}
                placeholder="__/__"
              />
            </View>
            <Text style={styles.boxUserTitle}>Codigo de segurança *</Text>
            <View style={styles.boxUserLabel}>
              <TextInput
                style={styles.paymentLabel}
                keyboardType="numeric"
                maxLength={3}
                placeholder=""
              />
            </View>
          </View>
          <View style={styles.boxTotalPrice}>
            <Text style={{ fontSize: 24 }}>Total</Text>
            <Text style={{ fontSize: 24 }}>R$ 60,00</Text>
          </View>
          <View style={styles.boxButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>FINALIZAR PAGAMENTO</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

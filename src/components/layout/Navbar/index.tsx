import { View } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export function NavBar() {
  const navigation = useNavigation();

  const changeComponent = (value: any) => {
    console.log(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <IconButton
            icon="home-outline"
            iconColor={MD3Colors.neutral0}
            size={40}
            onPress={() => changeComponent("home")}
            style={styles.button}
          />
          <IconButton
            icon="heart-outline"
            iconColor={MD3Colors.neutral0}
            size={40}
            onPress={() => changeComponent("favorite")}
            style={styles.button}
          />
          <IconButton
            icon="ticket-confirmation-outline"
            iconColor={MD3Colors.neutral0}
            size={40}
            onPress={() => changeComponent("tickets")}
            style={styles.button}
          />
          <IconButton
            icon="account-outline"
            iconColor={MD3Colors.neutral0}
            size={40}
            onPress={() => changeComponent("profile")}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

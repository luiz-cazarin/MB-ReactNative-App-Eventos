import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";

export function CategoryCard() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://www.zdnet.com/a/img/resize/846b4c4d075dd9a5d7f4961767e6906c619020d8/2020/07/21/8f8c5e3b-1eb7-4100-b4d8-0059c89cd8e6/istock-1213497796-2.jpg?auto=webp&width=1200",
        }}
      />
      <Text style={styles.description}>Titulo</Text>
    </View>
  );
}

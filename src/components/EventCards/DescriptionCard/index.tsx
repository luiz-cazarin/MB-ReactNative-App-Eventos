import { View, Text } from "react-native";
import { styles } from "./styles";

export function DescriptionCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descrição do evento</Text>
      <Text style={styles.description}>
        Vamos falar sobre Scrum, framework para gerenciamento de projetos com
        ênfase inicial no desenvolvimento de software, embora tenha sido usado
        em outros campos, incluindo pesquisa, vendas, marketing e tecnologias
        avançadas.
      </Text>
    </View>
  );
}

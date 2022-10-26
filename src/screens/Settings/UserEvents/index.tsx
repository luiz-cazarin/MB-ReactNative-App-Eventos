import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { FlatList, View } from "react-native";
import { Header } from "../../../components/layout/Header";
import { EventCardActions } from "../../../components/EventCardActions";
import { EVENTS } from "../../../utils/events";

export function UserEvents({ navigation }: any) {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          title="Meus eventos"
        />
        <FlatList
          data={EVENTS}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <EventCardActions event={item} navigation={navigation} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { HeadingSearchBar } from "../../components/HeadingSearchBar";
import { BodyCardHome } from "../../components/BodyCardHome";
import { Background } from "../../components/Background";
import { useState } from "react";

export function Home() {
  const [eventName, setEventName] = useState("Nome do evento");
  function setName(name: any) {
    return setEventName(name);
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <HeadingSearchBar handleInputName={setName} />
        <BodyCardHome eventName={eventName} />
      </SafeAreaView>
    </Background>
  );
}

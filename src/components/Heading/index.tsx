import { View } from "react-native";
import { styles } from "./styles";
import { Searchbar } from "react-native-paper";
import { useState } from "react";

export function Heading() {
  const [searchNameEvent, setSearchNameEvent] = useState("");

  const onChangeSearch = (query: any) => {
    setSearchNameEvent(query);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Nome do evento"
        onChangeText={onChangeSearch}
        value={searchNameEvent}
        style={styles.search}
      />
    </View>
  );
}

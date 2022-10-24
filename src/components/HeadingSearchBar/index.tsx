import { View } from "react-native";
import { styles } from "./styles";
import { Searchbar } from "react-native-paper";
import { useState } from "react";

export function HeadingSearchBar({ handleInputName }: any) {
  const [searchNameEvent, setSearchNameEvent] = useState("");

  const onChangeSearch = (query: any) => {
    handleInputName(query);
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

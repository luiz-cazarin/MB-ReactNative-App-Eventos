import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Button({ text, color, backgroundColor, event }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.boxButton}>
        <TouchableOpacity
          style={{
            backgroundColor: `${backgroundColor}`,
            borderRadius: 10,
            alignItems: "center",
            paddingVertical: 20,
            width: "100%",
          }}
          onPress={event}
        >
          <Text style={{ color: `${color}`, fontWeight: "600" }}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

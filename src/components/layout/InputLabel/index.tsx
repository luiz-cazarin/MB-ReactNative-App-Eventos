import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function InputLabel({
  title,
  placeholder,
  maxLength,
  value,
  keyboardType,
  editable,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  );
}

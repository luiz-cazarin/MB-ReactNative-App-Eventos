import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function InputArea({
  title,
  placeholder,
  maxLength,
  value,
  keyboardType,
  editable,
  multiline,
  mid,
}: any) {
  return (
    <View style={{ width: `${mid ? "48%" : "100%"}` }}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        editable={editable}
        multiline={multiline}
      />
    </View>
  );
}

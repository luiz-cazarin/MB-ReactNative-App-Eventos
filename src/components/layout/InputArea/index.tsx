import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function InputArea({
  title,
  placeholder,
  maxLength,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
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
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        editable={editable}
        multiline={multiline}
      />
    </View>
  );
}

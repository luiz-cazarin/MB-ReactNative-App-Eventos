import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export function Header({
  iconLeft,
  eventLeft,
  title,
  leftColor,
  iconRight,
  eventRight,
  textRight,
  rightColor,
}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          color={leftColor}
          name={iconLeft}
          size={22}
          onPress={eventLeft}
        ></Icon>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        {iconRight ? (
          <Icon
            color={rightColor}
            name={iconRight}
            size={24}
            onPress={eventRight}
          />
        ) : (
          <Text onPress={eventRight}>{textRight}</Text>
        )}
      </View>
    </View>
  );
}

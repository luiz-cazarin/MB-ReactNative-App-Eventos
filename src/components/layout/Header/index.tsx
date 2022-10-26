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
          style={styles.iconLeft}
          color={leftColor}
          name={iconLeft}
          size={22}
          onPress={eventLeft}
        ></Icon>
        <Text style={styles.title}>{title}</Text>
        {iconRight ? (
          <Icon
            style={styles.iconRight}
            color={rightColor}
            name={iconRight}
            size={24}
            onPress={eventRight}
          />
        ) : (
          <Text style={styles.iconRight} onPress={eventRight}>{textRight}</Text>
        )}
      </View>
    </View>
  );
}

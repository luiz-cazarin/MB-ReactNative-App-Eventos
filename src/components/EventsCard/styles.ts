import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: .2,
    shadowRadius: 3,
  },
  img: {
    width: 160,
    height: 170,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginVertical: 13,
  },
  description: {
    fontSize: 14,
    fontWeight: "bold",
  },
  dateTime: {
    color: "#ff0000",
  },
  title: {
    fontWeight: "bold",
  },
  local: {
    fontWeight: "400",
  },
});

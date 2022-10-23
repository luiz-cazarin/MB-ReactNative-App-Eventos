import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    marginRight: 16,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  img: {
    width: 137,
    height: 75,
    backgroundColor: "#2e2e2e",
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

import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginRight: 16,
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: "#2e2e2e",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    marginVertical: 13,
  },
  description: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

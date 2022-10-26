import { Center } from "native-base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLeft: {
    position: "absolute",
    left: 20,
  },
  iconRight: {
    position: "absolute",
    right: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

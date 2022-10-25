import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  header: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#404040",
    borderRadius: 10,
  },
  textButton: {
    color: "#ffff",
    textAlign: "center",
    paddingVertical: 24,
    fontWeight: "bold",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  header: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  divisor: {
    height: 8,
    backgroundColor: "#EFEFEF",
  },
  boxButton: {
    height: 110,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#6AD03A",
    paddingVertical: 20,
    width: 343,
  },
  
});

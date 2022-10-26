import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerPrice: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "600",
  },
  box: {
    margin: 20,
  },
  boxTicket: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C5C5C5",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonPosition: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 50,
  },
  ticketPrice: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nameTicket: {
    fontSize: 16,
    fontWeight: "600",
  },
  count: {
    paddingVertical: 10,
  },
});

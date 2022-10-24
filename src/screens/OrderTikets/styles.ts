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
  headerPrice: {
    paddingHorizontal: 20,
    display: "flex",
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
  boxTicket: {
    margin: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#C5C5C5",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  boxDescriptions: {
    maxWidth: 230,
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
  boxButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
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
  text: {
    color: "#ffff",
  },
});

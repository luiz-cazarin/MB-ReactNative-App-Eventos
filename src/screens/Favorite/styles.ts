import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 30,
  },
  listEvents: {
    width: "100%",
  },
  cardEvent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    marginBottom: 5,
  },
  cardEventBanner: {
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#f4f4f4",
    width: 220,
    minHeighth: 110,
  },
  cardEventDetails: {
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#f4f4f4",
    width: 130,
    minHeighth: 110,
    padding: 10,
  },
  eventData: {
    color: "#ff0000",
    fontSize: 12,
  },
  eventName: {
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
  eventLocal: {
    color: "#5A5A5A",
    fontWeight: "400",
    fontSize: 12,
  },
});

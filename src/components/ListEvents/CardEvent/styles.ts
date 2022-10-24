import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardEvent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    marginBottom: 5,
    minHeight: 110,
  },
  cardEventBanner: {
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#f4f4f4",
    width: 220,
    minHeighth: 110,
    maxHeight: 130,
  },
  banner: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 10,
  },
  cardEventDetails: {
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#f4f4f4",
    width: 130,
    minHeighth: 110,
    maxHeight: 130,
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

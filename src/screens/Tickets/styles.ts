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
    paddingTop: 30,
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
    backgroundColor: "#f4f4f4",
    width: 233,
    height: 100,
  },
  cardEventDetails: {
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: "#f4f4f4",
    width: 120,
    height: 100,
  },
});

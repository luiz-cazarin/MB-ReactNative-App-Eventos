import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 221,
    width: "100%"
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  details: {
    height: 170,
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxDetails: {
    flexDirection: "row",
  },
  location: {
    paddingTop: 1,
    paddingBottom: 10,
    paddingLeft: 30,
    color: "#545454",
  },
  descriptionDetail: {
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "500",
  },
});

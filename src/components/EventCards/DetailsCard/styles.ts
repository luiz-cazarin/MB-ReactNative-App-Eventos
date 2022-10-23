import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  banner: {
    height: 221,
    backgroundColor: "#1f1f1f",
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  details: {
    height: 170,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxDetails: {
    display: "flex",
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

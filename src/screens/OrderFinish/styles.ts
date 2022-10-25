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
  headerTitle: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divisor: {
    height: 8,
    backgroundColor: "#EFEFEF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "400",
    paddingBottom: 18,
  },
  boxUser: {
    margin: 15,
    padding: 10,
  },
  boxUserLabel: {},
  paymentLabel: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#EFEFEF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  userLabel: {
    color: "#828282",
  },
  boxUserTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  boxTotalPrice: {
    width: "100%",
    paddingHorizontal: 25,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  boxButton: {
    marginHorizontal: 20,
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

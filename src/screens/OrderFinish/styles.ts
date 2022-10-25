import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
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
    padding: 20,
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

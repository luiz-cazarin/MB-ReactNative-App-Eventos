import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    borderWidth: 2,
    borderColor: "#EFEFEF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  boxProfile: {
    display: "flex",
    alignItems: "center",
  },
  profileImg: {
    backgroundColor: "#000000",
    borderRadius: 150,
    margin: 28,
    height: 120,
    width: 120,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

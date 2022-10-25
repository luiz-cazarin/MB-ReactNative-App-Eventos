import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
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
    borderRadius: 150,
    margin: 28,
    height: 120,
    width: 120,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  boxButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 100,
  },
  button: {
    marginVertical: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    paddingVertical: 10,
    textAlign: "center",
    fontWeight: "600",
  },
});

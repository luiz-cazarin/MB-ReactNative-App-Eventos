import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxProfile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    borderRadius: 150,
    margin: 28,
    height: 100,
    width: 100,
  },
  title: {
    paddingTop: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
  },
  boxOptions: {
    padding: 5,
  },
  button: {
    marginVertical: 2,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  boxFooter: {
    alignItems: "center",
    position: "absolute",
    left: 30,
    right: 30,
    bottom: 30,
  },
  buttonExit: {
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    borderColor: "#D9D9D9",
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
});

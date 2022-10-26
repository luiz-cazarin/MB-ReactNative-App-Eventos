import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxProfile: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    borderRadius: 150,
    margin: 28,
    height: 100,
    width: 100,
    backgroundColor: '#000000'
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
    marginVertical: 5,
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
});

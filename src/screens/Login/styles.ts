import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#000000",
  },
  logo: {
    paddingTop: "15%",
  },
  emailField: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: 292,
    height: 58,
    marginVertical: 10,
    padding: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: 292,
    height: 58,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    height: "35%",
    marginTop: 30,
  },
  buttonLogin: {
    backgroundColor: "#2e2e2e",
    width: 292,
    height: 58,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  registerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffff",
  },
  buttonRegister: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet } from "react-native";
import { Colors } from "./ColorsVarabels";
export const LoginStyle = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  LoginConainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texts: { fontSize: 20, color: "#3660ff", fontWeight: "bold" },

  InputsContainer: {
    marginTop: 20,
    gap: 10,
    justifyContent: "flex-start",
  },
  Inputs: {
    backgroundColor: "rgba(137, 203, 232, 0.15)",
    marginTop: 5,
    borderRadius: 10,
    padding: 10,
    width: "90%",
  },
  ForgetPassword: {
    alignItems: "flex-end",
    marginTop: 20,
    marginRight: 30,
    color: Colors.primary,
  },
  LoginButton: {
    backgroundColor: `${Colors.primary}`,
    width: 250,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  Icons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(137, 203, 232, 0.15)",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

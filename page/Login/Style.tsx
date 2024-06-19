import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginAll: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
  },
  loginTop: {
    flex: 1 / 4,
    justifyContent: "space-evenly",
  },
  loginTopTitle: {
    fontSize: 48,
    color: "#EF835C",
  },
  loginTopDesc: {
    width: "70%",
    fontSize: 12,
    color: "#BFBFBF",
  },
  loginInput: {
    flex: 3 / 7,
    justifyContent: "space-evenly",
  },
  loginInputAccount: {
    borderBottomWidth: 1,
    borderColor: "#B0B1B1",
    paddingLeft: 15,
    paddingRight: 15,
    height: 36,
  },
  loginInputGetCode: {
    borderColor: "#B0B1B1",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 36,
  },
  loginButton: {
    flex: 1 / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonPressable: {
    width: "80%",
    height: "80%",
    backgroundColor: "#EF835C",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonPressableText: {
    fontSize: 20,
    color: "#FFF",
  },
  loginOther: {
    flex: 1 / 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

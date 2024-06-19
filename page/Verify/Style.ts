import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  verifyAll: {
    flex: 1,
    alignItems: "center",
  },
  verifySvg: {
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  verifySvgImage: {
    width: 300,
    height: 300,
  },
  verifyPrompt: {
    flex: 1 / 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  verifyPromptText1: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  verifyPromptText2: {
    fontSize: 16,
    color: "#E9E9E9",
  },
  verifyCode: {
    width: "100%",
    flex: 1 / 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  verifyCodeInput: {
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderColor: "#EF835C",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  verifyResend: {
    flex: 1 / 3,
    justifyContent: "center",
  },
});

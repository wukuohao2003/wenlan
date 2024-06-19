import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  robotAll: {
    width: "100%",
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  robotAnswer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    borderRadius: 20,
    padding: 10,
  },
  robotAnswerWelcome: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    borderRadius: 15,
    padding: 10,
  },
  robotQuestion: {
    flex: 1 / 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  robotQuestionInput: {
    flex: 1,
    height: 45,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#F2F2F2",
  },
  robotQuestionButton: {
    width: 74,
    height: 45,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EF835C",
    borderRadius: 5,
  },
  robotQuestionButtonText: {
    fontSize: 16,
    color: "#FFF",
  },
});

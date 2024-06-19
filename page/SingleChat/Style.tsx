import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  singleChatAll: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  singleChatHeader: {
    width: "100%",
    height: 48,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  singleChatHeaderText: {
    fontSize: 20,
  },
  singleChatBody: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    marginBottom: 5,
  },
  singleChatBodyItem: {
    width: "100%",
    marginBottom: 20,
  },
  singleChatBodyAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
    marginLeft: 10,
  },
  singleChatBodyMessage: {
    maxWidth: "60%",
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: "#EF835C",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  singleChatBodyMessageText: {
    fontSize: 15,
    color: "#FFF",
  },
  singleChatFooter: {
    width: "100%",
    height: 36,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    marginBottom: 5,
  },
  singleChatFooterInput: {
    flex: 1,
    borderWidth: 1,
    marginRight: 10,
    borderColor: "#E5E5E5",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  singleChatFooterButton: {
    width: 60,
    height: 36,
    backgroundColor: "#EF835C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  singleChatFooterButtonText: {
    color: "#FFF",
  },
});

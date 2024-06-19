import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  messageAll: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  messageTop: {
    flex: 1 / 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageTopTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EF835C",
  },
  messageContacts: {
    flex: 1,
  },
  messageContactsItem: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageContactsItemInfo: {
    flexDirection: "row",
  },
  messageContactsItemInfoPic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },
  messageContactsItemInfoPicAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  messageContactsItemInfoPicStatus: {
    width: 8,
    height: 8,
    borderRadius: 5,
    position: "absolute",
    bottom: 2,
    right: 2,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  messageContactsItemTime: {
    fontSize: 14,
    color: "#A6A6A6",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeAll: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  homeTop: {
    flex: 1 / 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeUser: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  homeUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  homeUserInfo: {
    flex: 1,
    height: 40,
    marginLeft: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  homeUserInfoName: {
    fontSize: 21,
    fontWeight: "bold",
  },
  homeUserInfoSign: {
    fontSize: 15,
    color: "#E0E0E0",
  },
  homeCreate: {
    width: 24,
    height: 24,
  },
  homeTypes: {
    flex: 1 / 12,
    flexDirection: "row",
    alignItems: "center",
  },
  homeTypesScroll: {
    flex: 1,
  },
  homeTypesScrollText: {
    fontSize: 18,
    marginRight: 15,
  },
  homeContent: {
    flex: 1,
  },
  homeNothingData: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeContentLoading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -20,
    marginTop: -10,
  },
});

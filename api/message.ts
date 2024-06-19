import $request from "../tools/$request";
import { $storage } from "../tools/$storage";

export const getUserAPI = async (_id: string) => {
  const etag = await $storage.Gets("Etag");
  return $request({
    url: "getMessageList",
    method: "post",
    headers: {
      "if-none-match": etag || "",
    },
    data: {
      _id,
    },
  });
};

export const getMessageListAPI = (senderID: string, recipientID: string) => {
  return $request({
    url: "getMessageDetails",
    method: "post",
    data: {
      senderID,
      recipientID,
    },
  });
};

export const saveMessageAPI = (
  senderID: string,
  recipientID: string,
  messageDetail: string,
) => {
  return $request({
    url: "saveMessage",
    method: "post",
    data: {
      senderID,
      recipientID,
      messageDetail,
      sendTime: new Date(),
    },
  });
};

import $request from "../tools/$request";

export const getUserAPI = (_id: string) => {
  return $request({
    url: "getMessageList",
    method: "post",
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

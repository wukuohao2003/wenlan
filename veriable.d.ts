// 博客列表
declare interface CreationListType {
  _id: string;
  creationTitle: string;
  creationCover: string;
  creationContent: string;
  creationCollection: number;
  creationLike: number;
  creationShare: number;
  userID: string;
  typeName: string;
}

// 博客类型
declare interface CreationTypesType {
  _id: string;
  typeName: string;
}

declare interface typesDataType {
  code: number;
  typesList: CreationTypesType[];
}

// 好友列表
declare interface FriendListType {
  _id: string;
  userAccount: string;
  userName: string;
  userDesc: string;
  userAvatar: string;
  friendList: string;
}

// 用户信息
declare interface UserType {
  _id: string;
  userAccount: string;
  userName: string;
  userDesc: string;
  userAvatar: string;
  friendList: FriendListType[];
  messageList: string;
}

// 消息列表
declare interface MessagesType {
  senderID: UserType;
  recipientID: UserType;
  messageDetail: string;
  sendTime: Date;
}

declare interface MessageParams {
  userID: string;
}

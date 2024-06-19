declare module "react-native-vector-icons/Ionicons" {
  const Ionicons: any;
  export default Ionicons;
}

declare module "axios" {
  interface Data {
    code?: number;
    typesList: CreationTypesType[];
    creationList: CreationListType[];
    userList: UserType;
    messageList: UserType[];
  }
  interface AxiosResponse<T = any, D = any> {
    data: Data;
  }
}

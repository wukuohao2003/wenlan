import AsyncStorage from "@react-native-async-storage/async-storage";

export const $storage = {
  Gets: (gets: string) => {
    return AsyncStorage.getItem(gets);
  },
  Sets: (sets: string, datas: string) => {
    return AsyncStorage.getItem(sets, datas);
  },
  Clear: () => {},
};

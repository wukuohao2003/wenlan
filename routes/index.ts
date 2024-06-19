import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../page/Index";
import SingleChat from "../page/SingleChat/SingleChat";
import Login from "../page/Login/Login";
import Verify from "../page/Verify/Verify";

const Navigation = createNativeStackNavigator({
  initialRouteName: "Index",
  screens: {
    Index: {
      screen: Index,
      options: {
        headerShown: false,
      },
    },
    SingleChat: {
      screen: SingleChat,
      options: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      options: {
        headerShown: false,
      },
    },
    Verify: {
      screen: Verify,
      options: {
        headerShown: false,
      },
    },
  },
} as any) as any;

export const Router = createStaticNavigation(Navigation);

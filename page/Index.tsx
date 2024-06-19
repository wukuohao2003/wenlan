import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home/Home";
import IonIcons from "react-native-vector-icons/Ionicons";
import Robot from "./Robot/Robot";
import Message from "./Message/Message";
import Mine from "./Mine/Mine";

const Tab = createBottomTabNavigator();

function Index() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#EF835C",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <IonIcons name="briefcase-outline" color={color} size={size} />
            );
          },
          title: "首页",
          tabBarIconStyle: {
            marginBottom: 5,
          },
        }}
      />
      <Tab.Screen
        name="Robot"
        component={Robot}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <IonIcons name="earth-outline" color={color} size={size} />;
          },
          title: "小文",
          tabBarIconStyle: {
            marginBottom: 5,
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <IonIcons
                name="chatbox-ellipses-outline"
                color={color}
                size={size}
              />
            );
          },
          title: "消息",
          tabBarIconStyle: {
            marginBottom: 5,
          },
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <IonIcons name="id-card-outline" color={color} size={size} />
            );
          },
          title: "我的",
          tabBarIconStyle: {
            marginBottom: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Index;

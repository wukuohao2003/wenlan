import {
  View,
  StatusBar,
  Text,
  ScrollView,
  Image,
  Pressable,
  AppState,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useMemo, useState } from "react";
import { getUserAPI } from "../../api/message";
import { Loading } from "../../assemblys/Loading";
import { useNavigation } from "@react-navigation/native";
import { io } from "socket.io-client";

function Message() {
  const [messageList, setMessageList] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [socket, setSocket] = useState(null);
  const [statusList, setStatusList] = useState([]);
  const [state, setState] = useState(false);

  const navigate = useNavigation();

  const getUser = async () => {
    setLoading(true);
    const data = await getUserAPI("666a6267c5850954c0391481");
    if (data.code == 200) {
      setMessageList(data.messageList);
      setLoading(false);
    }
  };

  const connect = () => {
    console.log(1);
    const websoc: any = io("https://wenlan-pavilion.top:5000");
    setSocket(websoc);

    websoc.on("status", (data: any) => {
      setStatusList(data);
    });
  };

  useEffect(() => {
    connect();

    const handleAppStateChange = (nextAppState) => {
      if (nextAppState == "active") {
        connect();
      }
    };

    AppState.addEventListener("change", handleAppStateChange);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFF" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar />
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.messageAll}>
            <View style={styles.messageTop}>
              <Text style={styles.messageTopTitle}>消息通知</Text>
              <Ionicons name="trash-outline" color="#A6A6A6" size={24} />
            </View>
            <ScrollView
              style={styles.messageContacts}
              showsVerticalScrollIndicator={false}
            >
              {messageList.map((item, index) => {
                return (
                  <Pressable
                    onPress={() =>
                      navigate.navigate("SingleChat", {
                        userName: item.userName,
                        userID: item._id,
                      })
                    }
                    key={index}
                  >
                    <View style={styles.messageContactsItem}>
                      <View style={styles.messageContactsItemInfo}>
                        <View style={styles.messageContactsItemInfoPic}>
                          <Image
                            source={{
                              uri: item.userAvatar,
                            }}
                            style={styles.messageContactsItemInfoPicAvatar}
                          ></Image>
                          <View
                            style={{
                              ...styles.messageContactsItemInfoPicStatus,
                              backgroundColor: statusList.find(
                                (value) => value == item._id,
                              )
                                ? "green"
                                : "red",
                            }}
                          ></View>
                        </View>
                        <View>
                          <Text>{item.userName}</Text>
                          <Text></Text>
                        </View>
                      </View>
                      <Text style={styles.messageContactsItemTime}>12：30</Text>
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Message;

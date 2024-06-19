import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  StatusBar,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useMemo, useRef, useState } from "react";
import { getMessageListAPI, saveMessageAPI } from "../../api/message";
import { io } from "socket.io-client";

function SingleChat() {
  const { params } = useRoute<any>();
  const { goBack } = useNavigation();
  const [messageList, setMessageList] = useState<MessagesType[]>([]);
  const [message, setMessage] = useState<string>("");
  const [socket, setSocket] = useState(null);

  const scrollRef = useRef();

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({
        animated: true,
      });
    }
  };

  const getMessageList = async (state: boolean = true) => {
    const data = await getMessageListAPI(
      "666a6267c5850954c0391481",
      params.userID,
    );
    if (data.data.code == 200) {
      setMessageList(data.data.datas);
      if (state) {
        setTimeout(() => {
          scrollToBottom();
        }, 100);
      }
    }
  };

  useEffect(() => {
    const websoc: any = io("https://wenlan-pavilion.top:5000", {
      query: {
        userID: "666a6267c5850954c0391481",
      },
    });

    setSocket(websoc);

    websoc.on("fillMessage", () => {
      getMessageList();
    });

    getMessageList();

    return () => {
      websoc.disconnect();
    };
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFF" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={styles.singleChatAll}>
            <View style={styles.singleChatHeader}>
              <Pressable onPress={() => goBack()}>
                <Ionicons name="chevron-back-outline" size={24} />
              </Pressable>
              <Text style={styles.singleChatHeaderText}>{params.userName}</Text>
              <Ionicons name="ellipsis-horizontal-outline" size={24} />
            </View>
            <FlatList
              ref={scrollRef}
              data={messageList}
              showsVerticalScrollIndicator={true}
              style={styles.singleChatBody}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      ...styles.singleChatBodyItem,
                      flexDirection:
                        item.recipientID._id == params.userID
                          ? "row-reverse"
                          : "row",
                    }}
                    key={index}
                  >
                    <Image
                      source={{
                        uri: item.senderID.userAvatar,
                      }}
                      style={styles.singleChatBodyAvatar}
                    ></Image>
                    <Pressable style={styles.singleChatBodyMessage}>
                      <Text style={styles.singleChatBodyMessageText}>
                        {item.messageDetail}
                      </Text>
                    </Pressable>
                  </View>
                );
              }}
            />
            <View style={styles.singleChatFooter}>
              <TextInput
                style={styles.singleChatFooterInput}
                value={message}
                onChangeText={(text) => {
                  setMessage(text);
                }}
                onFocus={() => {
                  scrollToBottom();
                }}
              ></TextInput>
              <Pressable
                style={styles.singleChatFooterButton}
                onPress={async () => {
                  const data = await saveMessageAPI(
                    "666a6267c5850954c0391481",
                    params.userID,
                    message,
                  );
                  if (data.data.code == 200) {
                    socket.emit("sendMessage", params.userID);
                    setMessage("");
                    getMessageList();
                  }
                }}
              >
                <Text style={styles.singleChatFooterButtonText}>发送</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default SingleChat;

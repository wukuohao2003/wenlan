import { useNavigation } from "@react-navigation/native";
import { View, StatusBar, Text, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Mine() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFF" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar />
        <View>
          <Text>你好Mine</Text>
          <Pressable
            onPress={() => navigate("Login")}
            style={{ width: 40, height: 20, backgroundColor: "red" }}
          >
            <Text>登录</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Mine;

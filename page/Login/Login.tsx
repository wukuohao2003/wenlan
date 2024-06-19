import {
  View,
  StatusBar,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Style";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const [account, setAccount] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const { navigate } = useNavigation();
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFF" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar />
        <View style={{ flex: 1 }}>
          <View style={styles.loginAll}>
            <View style={styles.loginTop}>
              <Text style={styles.loginTopTitle}>Sign</Text>
              <Text style={styles.loginTopDesc}>
                Knowledge is an endless ocean, let us explore and appreciate the
                mysteries of life within it. Explore and appreciate the
                mysteries of life.
              </Text>
            </View>
            <View style={styles.loginInput}>
              <TextInput
                value={account}
                style={styles.loginInputAccount}
                placeholder="Phone ..."
                onChangeText={(text) => {
                  setAccount(text);
                }}
                onBlur={() => {
                  if (!account) {
                    console.log("err");
                  }
                }}
              ></TextInput>
              <View style={styles.loginInputGetCode}></View>
            </View>
            <View style={styles.loginButton}>
              <Pressable
                style={styles.loginButtonPressable}
                onPress={() => navigate("Verify", { account })}
              >
                <Text style={styles.loginButtonPressableText}>获取验证</Text>
              </Pressable>
            </View>
            <View style={styles.loginOther}>
              <Ionicons name="logo-apple" size={22} color="#A9A9A9" />
              <Pressable onPress={() => alert(1)}>
                <Ionicons name="logo-snapchat" size={22} color="#A9A9A9" />
              </Pressable>
              <Ionicons name="logo-wechat" size={22} color="#A9A9A9" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Login;

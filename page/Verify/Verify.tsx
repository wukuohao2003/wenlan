import {
  View,
  StatusBar,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Style";
import { useMemo, useRef, useState } from "react";

function Verify() {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const [code1, setCode1] = useState<string>("");
  const [code2, setCode2] = useState<string>("");
  const [code3, setCode3] = useState<string>("");
  const [code4, setCode4] = useState<string>("");

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFF" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar />
        <KeyboardAvoidingView style={styles.verifyAll} behavior="height">
          <View style={styles.verifySvg}>
            <Image
              source={require("../../assets/暂无相关信息.png")}
              style={styles.verifySvgImage}
            ></Image>
          </View>
          <View style={styles.verifyPrompt}>
            <Text style={styles.verifyPromptText1}>OPT Verification</Text>
            <Text style={styles.verifyPromptText2}>
              Enter the OPT sent to{" "}
              <Text style={{ color: "#333", fontWeight: "bold" }}>
                +86 15500136785
              </Text>
            </Text>
          </View>
          <View style={styles.verifyCode}>
            <TextInput
              style={styles.verifyCodeInput}
              maxLength={1}
              value={code1}
              ref={input1}
              keyboardType="numeric"
              onChangeText={(text) => {
                if (typeof parseInt(text) !== "number") {
                  return;
                }
                setCode1(text);
                setTimeout(() => {
                  if (!code1) {
                    input2.current.focus();
                  }
                }, 0);
              }}
            />
            <TextInput
              style={styles.verifyCodeInput}
              maxLength={1}
              value={code2}
              ref={input2}
              keyboardType="numeric"
              onChangeText={(text) => {
                if (typeof parseInt(text) !== "number") {
                  return;
                }
                setCode2(text);
                setTimeout(() => {
                  if (!code2) {
                    input3.current.focus();
                  } else {
                    input1.current.focus();
                  }
                }, 0);
              }}
            />
            <TextInput
              style={styles.verifyCodeInput}
              maxLength={1}
              value={code3}
              ref={input3}
              keyboardType="numeric"
              onChangeText={(text) => {
                if (typeof parseInt(text) !== "number") {
                  return;
                }
                setCode3(text);
                setTimeout(() => {
                  if (!code3) {
                    input4.current.focus();
                  } else {
                    input2.current.focus();
                  }
                }, 0);
              }}
            />
            <TextInput
              style={styles.verifyCodeInput}
              maxLength={1}
              value={code4}
              ref={input4}
              keyboardType="numeric"
              onChangeText={(text) => {
                if (typeof parseInt(text) !== "number") {
                  return;
                }
                setCode4(text);
                setTimeout(() => {
                  if (!code4) {
                    input4.current.blur();
                  } else {
                    input3.current.focus();
                  }
                }, 0);
              }}
            />
          </View>
          <View style={styles.verifyResend}>
            <Pressable>
              <Text>
                Dont`t recevice the OPT:
                <Text
                  style={{
                    color: "#EF835C",
                    marginLeft: 5,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Resend OPT
                </Text>
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Verify;

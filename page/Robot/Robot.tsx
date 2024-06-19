import {
  View,
  StatusBar,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Style";

function Robot() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFF" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar />
        <KeyboardAvoidingView style={styles.robotAll} behavior="height">
          <View style={styles.robotAll}>
            <FlatList
              style={styles.robotAnswer}
              showsVerticalScrollIndicator={false}
              data={[]}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.robotAnswerWelcome}>
                    <Text>你好我是人工智能小文，有什么需要的请问我吧...</Text>
                  </View>
                );
              }}
            ></FlatList>
            <View style={styles.robotQuestion}>
              <TextInput style={styles.robotQuestionInput}></TextInput>
              <Pressable style={styles.robotQuestionButton}>
                <Text style={styles.robotQuestionButtonText}>提问</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Robot;

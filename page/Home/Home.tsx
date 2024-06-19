import { useEffect, useState } from "react";
import WaterfallFlow from "react-native-waterfall-flow";
import {
  View,
  StatusBar,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import IonIcons from "react-native-vector-icons/Ionicons";
import { styles } from "./Style";
import { getCreationAPI, getTypesAPI } from "../../api/home";
import { Loading } from "../../assemblys/Loading";

function Home() {
  const [creationList, setCreationList] = useState<CreationListType[]>([]);
  const [creationTypesList, setCreationTypesList] = useState<
    CreationTypesType[]
  >([{ _id: "", typeName: "All" }]);
  let [currentType, setCurrentType] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getTypes = async () => {
    const data = await getTypesAPI();
    if (data.code == 200) {
      let newls = [...creationTypesList];
      newls.push(...data.typesList);
      setCreationTypesList(newls);
    }
  };

  const getCreations = async (typeName: string = "") => {
    setCreationList([]);
    setLoading(true);
    const data = await getCreationAPI(typeName);
    if (data.code == 200) {
      setCreationList(data.creationList);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTypes();
    getCreations();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFF" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar />
        <View style={styles.homeAll}>
          <View style={styles.homeTop}>
            <View style={styles.homeUser}>
              <Image
                source={require("../../assets/userAvatar.webp")}
                style={styles.homeUserAvatar}
              ></Image>
              <View style={styles.homeUserInfo}>
                <Text style={styles.homeUserInfoName}>兰彻斯特·豪</Text>
                <Text style={styles.homeUserInfoSign}>
                  欢迎来到，老废物乐园！
                </Text>
              </View>
            </View>
            <View style={styles.homeCreate}>
              <IonIcons name="duplicate-outline" size="24" color="#EF835C" />
            </View>
          </View>
          <View style={styles.homeTypes}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.homeTypesScroll}
            >
              {creationTypesList.map(
                (item: CreationTypesType, index: number) => {
                  return (
                    <Pressable
                      onPress={() => {
                        setCurrentType(item._id);
                        getCreations(item._id);
                      }}
                      key={index}
                    >
                      <Text
                        style={{
                          ...styles.homeTypesScrollText,
                          color: currentType == item._id ? "#FF8D1A" : "#333",
                          fontWeight:
                            currentType == item._id ? "bold" : "normal",
                        }}
                      >
                        {item.typeName}
                      </Text>
                    </Pressable>
                  );
                },
              )}
            </ScrollView>
          </View>

          <View style={styles.homeContent}>
            {loading ? (
              <Loading />
            ) : (
              <WaterfallFlow
                data={creationList}
                numColumns={2}
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(true);
                  setTimeout(() => {
                    getCreations(currentType);
                    setRefreshing(false);
                  }, 2000);
                }}
                onEndReached={() => {}}
                ListEmptyComponent={() => {
                  return (
                    <View style={styles.homeNothingData}>
                      <Image
                        source={require("../../assets/NoData.png")}
                        style={{ width: 200, height: 200 }}
                      />
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginBottom: 10,
                        marginRight: columnIndex == 0 ? 10 : 0,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={{ uri: item.creationCover }}
                        resizeMode="stretch"
                        defaultSource={require("../../assets/DefaultImages.jpeg")}
                        resizeMethod="resize"
                        style={{
                          width: "100%",
                          maxHeight: 420,
                          height: 110,
                          marginBottom: 10,
                          borderRadius: 10,
                        }}
                      ></Image>
                      <Text>{item.creationTitle}</Text>
                      {item.creationDesc ? (
                        <Text>{item.creationDesc}</Text>
                      ) : (
                        ""
                      )}
                    </View>
                  );
                }}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home;

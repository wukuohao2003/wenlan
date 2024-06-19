import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Loading = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(rotateValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      isInteraction: false,
    });

    const loop = Animated.loop(animation);

    loop.start();

    return () => loop.stop();
  }, []);

  const rotateTransform = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ rotate: rotateTransform }],
          },
        ]}
      >
        <Ionicons name="sync-outline" size={24} />
      </Animated.View>
      <Text style={{ marginTop: 10 }}>加载中...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 24,
    height: 24,
  },
});

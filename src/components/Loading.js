import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/lf20_d2yblndy.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 100,
    height: 100,
  },
});

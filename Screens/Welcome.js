import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function Welcome(props) {
  console.log("Welcome");
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <Image
        source={require("../assets/logo-red.png")}
        style={{
          height: 70,
          width: 70,
          position: "absolute",
          top: 100,
          left: 150,
        }}
      />
      <Text
        style={{
          fontSize: 13,
          fontWeight: "bold",
          position: "relative",
          top: 175,
          left: 110,
        }}
      >
        Sell What You Don't Need
      </Text>
      <View
        style={{
          backgroundColor: "red",
          height: 45,
          width: "100%",
          position: "absolute",
          bottom: 55,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "green",
          height: 45,
          width: "100%",
          position: "absolute",
          bottom: 10,
        }}
      ></View>
    </ImageBackground>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

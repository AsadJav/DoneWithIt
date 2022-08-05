import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function Welcome(props) {
  console.log("Welcome");
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          Sell What You Don't Need
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "red",
          height: 70,
          width: "100%",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "green",
          height: 70,
          width: "100%",
        }}
      ></View>
    </ImageBackground>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});

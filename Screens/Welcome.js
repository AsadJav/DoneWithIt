import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import routes from "../app/Navigation/routes";
import AppButton from "../Components/AppButton";

function Welcome({ navigation }) {
  console.log("Welcome");
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="sec"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
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
  login: {
    backgroundColor: "red",
    height: 70,
    width: "100%",
  },
  register: {
    backgroundColor: "green",
    height: 70,
    width: "100%",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
});

import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

export default ViewImageScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    position: "absolute",
    top: 60,
    left: 20,
  },
  deleteIcon: {
    backgroundColor: "green",
    height: 50,
    width: 50,
    position: "absolute",
    top: 60,
    right: 20,
  },
});

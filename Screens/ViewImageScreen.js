import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
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
    position: "absolute",
    top: 60,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 60,
    right: 20,
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
function ListitemSeparator(props) {
  return <View style={styles.screens}></View>;
}
const styles = StyleSheet.create({
  screens: {
    width: "100%",
    height: 1,
    backgroundColor: "gray",
  },
});
export default ListitemSeparator;

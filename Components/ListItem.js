import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import AppText from "./AppText";
//import Swipeable from "react-native-gesture-handler";
//import Swipeable from "react-native-gesture-handler/Swipeable";
//import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ image, title, subtitle, onPress, ImageComponent }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        {ImageComponent}
        {image && <Image source={image} style={styles.img} />}
        <View style={styles.imgContainer}>
          <AppText style={styles.name}>{title}</AppText>
          {subtitle && <AppText style={styles.listing}>{subtitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  img: {
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 35,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listing: {
    fontSize: 15,
    color: "gray",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
export default ListItem;

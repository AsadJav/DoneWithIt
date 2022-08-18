import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.screen}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icons}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    borderColor: colors.black,
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 8,
    marginBottom: 10,
    //justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icons: {
    marginRight: 10,
  },
});
export default AppTextInput;

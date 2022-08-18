import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={50}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    bottom: 30,
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;

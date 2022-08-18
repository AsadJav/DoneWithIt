import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Switch, Text, View } from "react-native";
import ListingDetailsScreen from "./Screens/ListingDetailsScreen";
import ViewImageScreen from "./Screens/ViewImageScreen";
import Welcome from "./Screens/Welcome";
import MessagesScreen from "./Screens/MessagesScreen";
//import Welcome from "./Screens/Welcome";
import Icon from "./Components/Icon";
import Screen from "./Components/Screen";
import colors from "./config/colors";
import ListItem from "./Components/ListItem";
//import AccountScreen from "./Screens/AccountScreen";
import ListingScreen from "./Screens/ListingScreen";
import AppTextInput from "./Components/AppTextInput";
import AppPicker from "./Components/AppPicker";
import { useEffect, useState } from "react";
import LoginScreen from "./Screens/LoginScreen";
import ListingEditScreen from "./Screens/ListingEditScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./Components/ImageInput";
import ImageInputList from "./Components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  ss: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  },
});

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../Screens/AccountScreen";
import ListingScreen from "../../Screens/ListingScreen";
import MessagesScreen from "../../Screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="My Listings" component={ListingScreen} />
    <Stack.Screen name="My Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;

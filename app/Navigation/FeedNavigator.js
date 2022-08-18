import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../../Screens/ListingScreen";
import ListingDetailsScreen from "../../Screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import routes from "../app/Navigation/routes";
import Card from "../Components/Card";
import Screen from "../Components/Screen";

const listings = [
  {
    id: 1,
    title: "Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Good Condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];
function ListingScreen({ navigation }) {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default ListingScreen;

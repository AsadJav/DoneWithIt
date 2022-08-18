import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import ListItem from "../Components/ListItem";
function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles.imge} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subtitle}>$ {listing.price}</AppText>
      </View>
      <ListItem
        image={require("../assets/me.jpg")}
        title="Asad Javed Sulemani"
        subtitle="10 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imge: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    color: colors.sec,
  },
  detailsContainer: {
    padding: 20,
  },
});
export default ListingDetailsScreen;

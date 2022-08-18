import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import ListItem from "../Components/ListItem";
import ListitemSeparator from "../Components/ListitemSeparator";
import Screen from "../Components/Screen";
import colors from "../config/colors";

const messages = [
  {
    id: 1,
    title: "A1",
    description: "B1",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "A2",
    description: "B2",
    image: require("../assets/me.jpg"),
  },
  {
    id: 3,
    title: "A3",
    description: "B3",
    image: require("../assets/me.jpg"),
  },
  {
    id: 4,
    title: "A4",
    description: "B4",
    image: require("../assets/me.jpg"),
  },
];
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.title + " " + "Success!")}
          />
        )}
        ItemSeparatorComponent={ListitemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screens: {
    paddingTop: Platform.OS === "android" ? 22 : 0,
  },
});
export default MessagesScreen;

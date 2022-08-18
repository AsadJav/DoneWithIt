import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import routes from "../app/Navigation/routes";
import Icon from "../Components/Icon";
import ListItem from "../Components/ListItem";
import Screen from "../Components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.sec },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Asad Javed Sulemani"
          subtitle="Mandi Bahauddin"
          image={require("../assets/me.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuitem) => menuitem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(routes.MY_MESSAGES)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
});
export default AccountScreen;

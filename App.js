import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./Screens/ViewImageScreen";
import Welcome from "./Screens/Welcome";
//import Welcome from "./Screens/Welcome";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  ss: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  },
});

// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
  },

  hero: {
    width: "100%",
    height: 160,
    top: Platform.OS === "android" ? 50 : 100,
  },

  hero_image: {
    flex: 1,
    resizeMode: "contain",
    width: undefined,
    height: undefined,
    // width: "50%",
    // height: "50%",
  },

  hero_text: {
    fontSize: 17,
    fontWeight: Platform.OS === "android" ? "600" : "normal",
    marginTop: 5,
    textAlign: "center",
  },

  // button_group: {
  //   flex: 1,
  //   height: 25,
  // },

  login: {
    backgroundColor: "blue",
    // width: "100%",
    // height: "100%",
    width: 50,
    height: 50,
  },

  sign_up: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
});

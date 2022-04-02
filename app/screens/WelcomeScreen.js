import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.login_btn}></View>
      <View style={styles.register_btn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  login_btn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logo_container: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  register_btn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;

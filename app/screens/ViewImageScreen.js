import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.close_icon}></View>
      <View style={styles.delete_icon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  close_icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },

  container: {
    backgroundColor: "#000",
    flex: 1,
  },

  delete_icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;

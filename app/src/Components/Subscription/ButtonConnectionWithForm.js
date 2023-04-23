// Composant validé

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ButtonConnectionWithForm = () => {
  return (
    <View style={styles.wrapperComponentStyle}>
      <Text style={styles.barreLeftStyle}></Text>
      <Text style={{ fontSize: 13, color: "white" }}>Connection with</Text>
      <Text style={styles.barreRightStyle}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperComponentStyle: {
    height: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: hp("8"),
  },
  barreLeftStyle: {
    width: "30%",
    height: 1,
    backgroundColor: "white",
  },
  barreRightStyle: {
    width: "30%",
    height: 1,
    backgroundColor: "white",
  },
});

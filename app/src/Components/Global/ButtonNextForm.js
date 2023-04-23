// Composant validé

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Normalize } from "../../Components/Global/Normalize";

export const ButtonNextForm = ({ Navigation }) => {
  return (
    <View style={styles.wrapperComponentStyle}>
      <TouchableOpacity style={styles.buttonStyle} onPress={Navigation}>
        <Text style={styles.textStyle}>{"Next"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperComponentStyle: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: hp("10%"),
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: Normalize(145),
    height: 40,
    backgroundColor: "#d6ff00",
    borderRadius: 13,
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
});

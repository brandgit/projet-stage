// Ce composant est validé

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Normalize } from "../../Components/Global/Normalize";

export const DescriptionOpeningForm = () => {
  return (
    <View style={styles.wrapperComponentStyle}>
      <Text style={styles.text1Style}>Find sport partners</Text>
      <Text style={styles.text2Style}>around you !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperComponentStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text1Style: {
    fontSize: Normalize(25),
    fontWeight: "bold",
    color: "white",
  },
  text2Style: {
    fontSize: Normalize(25),
    fontWeight: "bold",
    color: "white",
  },
});

// Ce composant est validé
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const HeaderOpeningForm = ({ children }) => {
  return <View style={styles.headerOpeningStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  headerOpeningStyle: {
    flex: 1 / 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26242F",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
});

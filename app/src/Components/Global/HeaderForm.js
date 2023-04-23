import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderForm = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#26242F",
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
      }}
    >
      {children}
    </View>
  );
};

export default HeaderForm;

const styles = StyleSheet.create({});

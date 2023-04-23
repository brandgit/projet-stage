// Validé

import { StyleSheet, Image, View } from "react-native";
import React from "react";

export const ButtonGoogle = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: 20,
      }}
    >
      <Image
        style={{
          width: 30,
          height: 30,
        }}
        source={require("../../../assets/Icons/Subscription/googleIcon.png")}
      />
    </View>
  );
};

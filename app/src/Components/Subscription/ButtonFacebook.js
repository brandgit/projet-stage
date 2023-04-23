// Validé

import { StyleSheet, Image, View } from "react-native";
import React from "react";

export const ButtonFacebook = () => {
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
          width: 35,
          height: 35,
        }}
        source={require("../../../assets/Icons/Subscription/facebookIcon1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

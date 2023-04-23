// Validé

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ConnectionWithForm = () => {
  return (
    <View
      style={{
        height: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: hp("10%"),
      }}
    >
      <Text
        style={{
          width: "30%",
          height: 1,
          backgroundColor: "white",
        }}
      ></Text>
      <Text
        style={{
          fontSize: 13,
          color: "white",
        }}
      >
        Connection with
      </Text>
      <Text
        style={{
          width: "30%",
          height: 1,
          backgroundColor: "white",
        }}
      ></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

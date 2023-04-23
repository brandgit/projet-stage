import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export const BioComponent = () => {
  return (
    <View
      style={{
        height: hp("5"),
        width: wp("38"),
        position: "absolute",
        top: "90%",
        left: "5%",
        backgroundColor: "#26242F",
        height: hp("15"),
        width: wp("90"),
        borderRadius: 13,
      }}
    >
      <View
        style={{
          height: hp("15"),
          width: wp("90"),
          //   borderWidth: 1,
          borderColor: "#d6ff00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 13,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <Text style={{ color: "white", fontSize: 14 }}>
          Complete my profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

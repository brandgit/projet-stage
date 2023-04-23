import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export const ButtonCompleteProfile = () => {
  const navigation = useNavigation();
  const goTo = () => {
    console.log("Button Start");
    // navigation.navigate("SubscriptionScreen");
  };
  return (
    <View
      style={{
        height: hp("5"),
        width: wp("38"),
        position: "absolute",
        top: "83%",
        left: "32%",
      }}
    >
      <TouchableOpacity
        style={{
          height: hp("5"),
          width: wp("38"),
          borderWidth: 1,
          borderColor: "#d6ff00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 13,
          backgroundColor: "#26242F",
        }}
        onPress={() => navigation.navigate("EditYourProfileScreen1")}
      >
        <Text style={{ color: "white", fontSize: 14 }}>
          Complete my profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

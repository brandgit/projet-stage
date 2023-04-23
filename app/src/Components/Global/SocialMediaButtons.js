// Validé

import { StyleSheet, Image, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const SocialMediaButtons = () => {
  return (
    <View
      style={{
        width: "100%",
        height: hp("12%"),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 120,
        }}
      >
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
            // source={require("../../../assets/Icons/Subscription/")}
          />
        </View>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

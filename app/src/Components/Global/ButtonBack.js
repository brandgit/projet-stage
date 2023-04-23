import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ButtonBack = (props) => {
  const navigation = useNavigation();

  const goTo = () => {
    console.log("Button Start");
    navigation.navigate(props.screen);
  };
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: props.widthButton,
        height: props.heightButton,
        backgroundColor: props.bgColor,
        borderRadius: 10,
        height: hp("12%"),
      }}
      onPress={goTo}
    >
      <Ionicons
        name="arrow-back"
        color={"#ffffff"}
        size={35}
        style={{ marginLeft: 20 }}
      />
    </TouchableOpacity>
  );
};

<ion-icon name="arrow-round-back"></ion-icon>;

const styles = StyleSheet.create({});

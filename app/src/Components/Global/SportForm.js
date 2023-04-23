import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IconForm } from "../../Components/Global/IconForm";

export const SportForm = (props) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: props.widhtComponent,
        height: props.heightComponent,
        backgroundColor: "#d6ff00",
        borderRadius: 15,
      }}
    >
      <IconForm Name={props.nameIcon} Color={"#26242F"} Size={props.sizeIcon} />
    </View>
  );
};

const styles = StyleSheet.create({});

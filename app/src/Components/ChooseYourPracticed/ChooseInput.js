import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export const ChooseInput = (props) => {
  return (
    <View  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 74,
        height: 90,
        backgroundColor: "grey",
        backgroundColor:"yellow"
      }} >
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: props.widthButton,
          height: props.heightButton,
          backgroundColor: "grey",
          borderRadius: 15,
        }}
      ></TouchableOpacity>
      <Text>Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

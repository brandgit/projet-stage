import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Normalize } from "../../Components/Global/Normalize"

export const CreatEvents = (props) => {
  return (
    <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "25%",
      paddingLeft: 10,
      paddingRight: 10,
    }}
  >
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: Normalize(19), fontWeight: "bold", color: "#333333" }}>
        {props.text}
      </Text>
     
    </View>
  </View>
  )
}


const styles = StyleSheet.create({})
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export  function BlockIcon({focused,...props}) {
    // const goTo = () =>{
    //     console.log("Button Start")
    //     navigation.navigate(props.screen)
    //   }
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: props.widthButton,
        height: props.heightButton,
        backgroundColor: props.f ?  props.bgColor1 : props.bgColor2,
        borderRadius: 15,
      }}
    >
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
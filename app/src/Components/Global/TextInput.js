import { StyleSheet, Text, View, TextInput, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React from "react";

export function Textinput(props) {

  let {...other} = props
  return (

    <TextInput
      style={{
        width: "80%",
        height: props.heightButton,
        backgroundColor: "grey",
        borderRadius: 10,
        color: "#C9C9C9",
        paddingLeft: 30,
        paddingBottom: props.PaddigUnput,
        
      }}
     
    />

  );
}

const styles = StyleSheet.create({

});


// onChangeText={onChangeNumber}
// value={text}
// placeholder={props.text}
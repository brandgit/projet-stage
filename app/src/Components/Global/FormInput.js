// Validé

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Normalize } from "../../Components/Global/Normalize";

const FormInput = (props) => {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      color={"#000000"}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.text}
      placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
      style={{
        width: Normalize(290),
        height: 66,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 18,
        color: "rgba(255, 255, 255, 0.5)",
        paddingLeft: 30,
        paddingBottom: 2,
        margin: 5,
        borderColor: props.borderColor,
        borderWidth: 1,
      }}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({});

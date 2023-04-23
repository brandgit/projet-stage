import { TextInput } from "react-native";
import React from "react";

export function TextinputForm(props) {
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

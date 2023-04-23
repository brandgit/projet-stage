// Ce composant est validé

import { Text } from "react-native";
import React from "react";

import { Normalize } from "../../Components/Global/Normalize";

export const TitleInputForm = (props) => {
  return (
    <Text
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",

        fontSize: Normalize(18),
        color: "white",
      }}
    >
      {props.title}
    </Text>
  );
};

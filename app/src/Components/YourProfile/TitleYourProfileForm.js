import { Text, View } from "react-native";
import React from "react";

import { Normalize } from "../../Components/Global/Normalize";

export const TitleYourProfileForm = (props) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
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
    </View>
  );
};

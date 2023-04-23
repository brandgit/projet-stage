import { StyleSheet, Text, View } from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";
import { Normalize } from "../../Components/Global/Normalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const TitleInput = (props) => {
  return (
    <Text
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",

        fontSize: Normalize(18),
        color: "white",

        // backgroundColor:"yellow"
      }}
    >
      {props.title}
    </Text>
  );
};

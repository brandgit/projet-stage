import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const TitleFormH2 = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 21,
          fontWeight: "bold",
          color: props.color,
        }}
      >
        {props.Title}
      </Text>
    </View>
  );
};

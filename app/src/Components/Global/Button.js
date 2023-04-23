import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export function Button(props) {
  const navigation = useNavigation();

  const goTo = () => {
    console.log("Button Start");
    // navigation.replace(props.screen);
    navigation.navigate(props.screen);
  };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: props.heightButtonR,
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: props.widthButton,
          height: props.heightButton,
          backgroundColor: props.bgColor,
          borderRadius: 13,
        }}
        onPress={goTo}
      >
        <Text
          style={{
            color: props.textColor,
            fontWeight: props.fontWeight,
            fontSize: props.size,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const ButtonForm = ({
  text,
  heightButtonR,
  widthButton,
  heightButton,
  bgColor,
  textColor,
  fontWeight,
  size,
  goTo,
}) => {
  const navigation = useNavigation();

  // const goTo = () => {
  //   console.log("Button " + text);

  //   // navigation.replace(screen, { id });
  //   navigation.navigate(screen, { id });
  //   // navigation.replace(screen, { element });
  // };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: heightButtonR,
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: widthButton,
          height: heightButton,
          backgroundColor: bgColor,
          borderRadius: 13,
        }}
        onPress={goTo}
      >
        <Text
          style={{
            color: textColor,
            fontWeight: fontWeight,
            fontSize: size,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Ce composent est validé

import { StyleSheet, Image } from "react-native";
import React from "react";

export const AddImageForm = (props) => {
  return (
    <Image
      style={{
        width: "100%",
        height: 50,
      }}
      source={props.LinkImage}
    />
  );
};

const styles = StyleSheet.create({});

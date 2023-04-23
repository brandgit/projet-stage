import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SportsList } from "./GlobalData";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export const ChoiseSportComponent = (props) => {
  const [click, setClick] = useState(false);
  const toggele = () => {
    setClick(!click);
  };
  const isActive = () => {
    click
      ? console.log("Button " + props.name + " is activity")
      : console.log("Button " + props.name + " is disabled");
  };

  return (
    <View
      style={{
        height: "100%",
        width: 75,

        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: 55,
          height: 55,
          backgroundColor: isActive() && click ? "#d6ff00" : "grey",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
          marginRight: 10,
        }}
        onPress={() => {
          toggele();
        }}
      >
        <View
          style={{
            width: 55,
            height: 55,
            backgroundColor: click ? "#d6ff00" : "grey",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Ionicons size={30} color="white" name={props.icon} />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: "grey",
        }}
      >
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

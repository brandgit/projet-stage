import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { FilterData } from "./GlobalData";
import { IconForm } from "./IconForm";
import { SportsList } from "./GlobalData";

export const CurserForm = () => {
  const [range, setRange] = useState("0km");
  const [sliding, setSliding] = useState("Inactive");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor="grey"
        minimumTrackTintColor="#d6ff00"
        thumbTintColor="white"
        value={1}
        onValueChange={(value) => setRange(parseInt(value * 1) + "km")}
        //onValueChange={(value) => setRange(parseInt(value * 1) + "km")}
        // onSlidingStart={() => setSliding("Sliding")}
        style={{ width: "85%", height: 20 }}
      />

      <Text style={{ color: "white", fontSize: 14 }}>{range}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

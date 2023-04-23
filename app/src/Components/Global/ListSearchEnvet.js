import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { EventsList } from "./EventsList";
import { SportForm } from "./SportForm";
import { IconForm } from "../../Components/Global/IconForm";
import { Normalize } from "./Normalize";

const ListSearchEnvet = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: hp("20"),
        width: wp("84"),
        backgroundColor: "white",
        borderRadius: 22,
        marginTop: 6,
        marginBottom: 6,
      }}
    ></View>
  );
};

export default ListSearchEnvet;

const styles = StyleSheet.create({});

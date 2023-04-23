import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export const DotsComponent = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-end",
        width: wp("10"),
        height: hp("10"),
        // marginTop: "12%",
        // backgroundColor: "red",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("NotificationsScreen");
        }}
      >
        <Ionicons color={"white"} name="dots-horizontal" size={44} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

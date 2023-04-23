import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SportsList } from "./GlobalData";
import { IconForm } from "./IconForm";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { Normalize } from "./Normalize";

export const ChoiseSport = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {SportsList.map((sport, index) => [
          <>
            <TouchableOpacity
              key={index}
              style={{
                height: "100%",
                width: "7%",
                alignItems: "center",
                justifyContent: "space-evenly",
                // marginLeft: 5,
                // marginRight: 5,
              }}
            >
              <View
                key={index}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "grey",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  //   marginLeft: 10,
                }}
              >
                <Ionicons size={30} color="white" name={sport.icon} />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                {sport.name}
              </Text>
            </TouchableOpacity>
          </>,
        ])}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

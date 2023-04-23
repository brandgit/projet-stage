import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IconForm } from "../Global/IconForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ProfileList } from "../Home/ProfileList";

export const Users = (props) => {
  return (
    <View style={{ display: "flex", alignItems: "center", marginBottom:"10%" }}>
      <>
        {ProfileList.map((Profile, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              height: hp("9"),
              width: wp("90"),
            }}
          >
            <View
              key={index}
              style={{
                width: 45,
                height: 47,
                backgroundColor: "grey",
                borderRadius: 12,
                backgroundColor: "yellow",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                }}
                source={Profile.image}
              />
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent:"center",
                width: wp("60"),
                height:hp("7"),
                // backgroundColor: "yellow",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "black",
                  fontWeight: "900",
                }}
              >
                {Profile.userName}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: "grey",
                  fontWeight: "bold",
                }}
              >
                {Profile.message}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 13,
                color: "grey",
                fontWeight: "bold",
              }}
            >
              {Profile.hour}
            </Text>
          </View>
        ))}
      </>
    </View>
  );
};

const styles = StyleSheet.create({});

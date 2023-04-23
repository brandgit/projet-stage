import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { SquartView } from "../Global/SquartView";
import { Normalize } from "../Global/Normalize";
import { ProfileList } from "./ProfileList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const SuggestedFriend = (props) => {
  return (
    <>
      {ProfileList.map((Profile, index) => (
        <View
          key={index}
          style={{
            height: hp(30),
            width: 200,
            backgroundColor: "#4B4C57",
            borderRadius: 20,
            marginTop: "3.5%",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <View
            key={index}
            style={{
              width: 70,
              height: 65,
              backgroundColor: "grey",
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#ffffff",
              position: "absolute",
              top: -32,
              left: 63,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,
              }}
              source={Profile.image}
            />
          </View>
          <View
            style={{
              height: hp(4),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 40,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              {Profile.userName}
            </Text>
          </View>
          <View
            style={{
              height: hp(4),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 1,
            }}
          >
            <Ionicons
              name="map-marker"
              color={"grey"}
              size={23}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 50,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                color: "#ffffff",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                marginRight: 10,
              }}
            >
              {Profile.city}
            </Text>
          </View>
          <View
            style={{
              height: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#ffffff",
                marginBottom: 10,
                fontWeight: "bold",
                display: "flex",
                flexDirection: "row",
              }}
            >
              Practiced sports
            </Text>

            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 50,
              }}
            >
              <View
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  backgroundColor: "#d6ff00",
                  borderRadius: 16,
                  borderColor: "#ffffff",
                }}
              >
                <Ionicons size={35} color="#26242F" name={Profile.icon} />
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({});

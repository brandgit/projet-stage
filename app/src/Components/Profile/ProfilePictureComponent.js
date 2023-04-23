import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { UserData } from "../../Components/Profile/DataSportif";

export const ProfilePictureComponent = ({ Photo, Name, City }) => {
  const inputString = "Hello World!";
  const outputString = inputString.substring(0, 1);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "flex-end",
        width: wp("55"),
        height: hp("10"),

        marginTop: "5%",
        // backgroundColor: "red",
      }}
    >
      {Photo !== null ? (
        <Image
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: wp("19"),
            height: hp("10"),
            backgroundColor: "red",
            borderRadius: 24,
            borderWidth: 2,
            borderColor: "white",
          }}
          source={Photo}
        />
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: wp("19"),
            height: hp("10"),
            backgroundColor: "rgba(75, 76, 87, 0.4)",
            // marginTop: "12%",
            borderRadius: 24,
            borderWidth: 2,
            borderColor: "white",
          }}
        >
          <Text style={{ color: "grey", fontWeight: "bold", fontSize: 40 }}>
            {Name.substring(0, 1)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { SportsListBenjamin } from "../../Components/Global/SportsList";
  import { IconForm } from "../../Components/Global/IconForm";

export const ListSportUser = () => {
  return (
    <View
    style={{
      height: hp("18"),
      display: "flex",
      flexDirection: "row",
    }}
  >
    <>
      {SportsListBenjamin.map((Sport, index) => (
        <View
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            width: "24%",
            height: 110,
          }}
        >
          <TouchableOpacity
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
              width: 70,
              height: 70,
              backgroundColor: "#d6ff00",
              borderRadius: 15,
            }}
          >
            <IconForm Name={Sport.icon} Color={"#26242F"} Size={40} />
          </TouchableOpacity>
          <Text
            style={{ marginTop: 10, color: "#26242F", fontWeight: "bold" }}
          >
            {Sport.name}
          </Text>
        </View>
      ))}
    </>
  </View>
  )
}


const styles = StyleSheet.create({})
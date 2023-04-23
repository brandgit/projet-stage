import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const NumberEvents = (props) => {
  return (
    <View
      style={{
        width: wp("15"),
        height: hp("6"),
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",

      }}
    >
      <View
        style={{
          width: 47,
          height: 28,
          backgroundColor: "#26242F",
          borderRadius: 15,

        }}>

        <Text
          style={{

            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 19,
          }}
        >
          {props.Number}
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({})
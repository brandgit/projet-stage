import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export const SquartView = (props) => {
  return (
    <View style={{width:props.widthSquart, height:props.heightSquart, backgroundColor:"#d6ff00", borderRadius:16,  borderColor:"#ffffff"}}>
      <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,
              }}
              source={props.IconSquart}
            />
    </View>
  )
}


const styles = StyleSheet.create({})
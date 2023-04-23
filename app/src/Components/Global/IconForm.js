import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export const IconForm = (props) => {
  return (
    <View>
        <Ionicons name={props.Name}
            color={props.Color}
            size={props.Size}
            />
            
    </View>
  )
}


const styles = StyleSheet.create({})
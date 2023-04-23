import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const LastArticles = () => {
  return (
    <View
      style={{
        display: "flex",
        height: "10%",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#333333" }}>
          Last articales
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({})
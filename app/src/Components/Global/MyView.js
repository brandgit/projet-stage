import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const MyView = ({ children, ...props }) => {
    return (
        <View style={{

            height: props.heightMyView,
            backgroundColor: "orange"
        }}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({})
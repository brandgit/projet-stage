import { StyleSheet, Text, View, Dimensions, Platform, PixelRatio } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Normalize } from "./Normalize";
const WIDTH = Dimensions.get("screen").width;

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get("window");
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function NameMessages() {
    return (

        <View style={{ width: Dimensions.get("screen").width, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Text style={styles.Messages}>Messages</Text>
        </View>




    );
}


const styles = StyleSheet.create({
    viewNameMessages: {
        display: "flex",
        alignItems: "center",

    },
    Messages: {
        fontSize: normalize(29),
        color: "white",
    },

});
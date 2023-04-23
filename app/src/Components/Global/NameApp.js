import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
const WIDTH = Dimensions.get("screen").width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function NameApp() {
  return (
    <View
      style={{
      // height:"2%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: hp("8%"),
      
      }}
    >
      <Text style={styles.sport}>SPORT</Text>
      <Text style={styles.events}>EVENTS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sport: {
    fontSize: normalize(29),
    color: "white",
  },
  events: {
    fontSize: normalize(29),
    fontWeight: "bold",
    color: "#d6ff00",
  },
});

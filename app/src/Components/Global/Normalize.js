import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions, PixelRatio
  } from "react-native";

  const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get("window");
  const scale = SCREEN_WIDTH / 320;
  
  export function Normalize(size) {
    const newSize = size * scale;
  
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
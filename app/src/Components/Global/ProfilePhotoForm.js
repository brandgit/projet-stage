import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { ProfileList } from "../../Components/Home/ProfileList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ProfilePhotoForm = (props) => {
  return (
    <View
     
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: props.widhtPhoto,
        height: props.heightPhoto,
        borderRadius: 20,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 20,
        }}
        source={props.PhotoUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

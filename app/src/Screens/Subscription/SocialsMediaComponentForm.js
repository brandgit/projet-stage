// Validé

import { StyleSheet, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ButtonFacebook } from "../../Components/Subscription/ButtonFacebook";
import { ButtonGoogle } from "../../Components/Subscription/ButtonGoogle";

const SocialsMediaComponentForm = () => {
  return (
    <View style={styles.wrapperComponentStyle}>
      <View style={styles.wrapperButtonsStyle}>
        <ButtonFacebook />
        <ButtonGoogle />
      </View>
    </View>
  );
};

export default SocialsMediaComponentForm;

const styles = StyleSheet.create({
  wrapperComponentStyle: {
    width: "100%",
    height: hp("12%"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperButtonsStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const ErrorSubscriptionForm = ({ messageError }) => {
  return (
    <View style={styles.wrapperComponentStyle}>
      <View>
        {messageError === "" ? (
          <Text style={styles.textStyle}></Text>
        ) : (
          <Text style={styles.textStyle}>{messageError}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperComponentStyle: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "red",
    fontSize: 15,
  },
});

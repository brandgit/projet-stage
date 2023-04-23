import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const CreateAcountForm = () => {
  const navigation = useNavigation();
  const goTo = () => {
    navigation.navigate("ConnectionScreen");
  };
  return (
    <View style={styles.wrapperComponentStyle}>
      <View style={styles.wrapper2Style}>
        {/* <Text style={styles.textStyle}></Text> */}

        <View style={styles.viewInput}>
          <Text style={styles.messageButtonStyle}>
            You already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={goTo}>
            <Text style={styles.textButtonStyle}>Connection</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperComponentStyle: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "red",
  },
  wrapper2Style: {
    // backgroundColor: "grey",
    width: "80%",
    height: 30,
  },
  textStyle: {
    color: "red",
    fontSize: 15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonStyle: {
    color: "white",
    fontSize: 15,
  },
  messageButtonStyle: {
    color: "#d6ff00",
    fontSize: 15,
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "center",
    height: 30,
  },
});

import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";
import { Normalize } from "../../Components/Global/Normalize";

export const SaerchModalForm = ({
  textInputFossued,
  setModalVisible,
  setTextInputFossued,
  handleSearch,
  textInput,
  text,
  setIconVisible,
  borderColor,
  BgColor,
}) => {
  return (
    <View
      style={{
        height: hp("12"),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(38, 36, 47, 1)",
        paddingTop: Normalize(15),
        position: "absolute",
        top: Normalize(0),
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <View style={[styles.TextInput, { borderColor: "rgba(38, 36, 47, )" }]}>
        <Animatable.View
          animation={textInputFossued ? "fadeInRight" : "fadeInLeft"}
          duration={400}
        >
          {setIconVisible ? (
            <Icon
              type="material"
              iconStyle={{ marginLeft: 3 }}
              size={28}
              color={"rgba(255, 255, 255, 0.4)"}
              name={"search"}
              // name={textInputFossued ? "arrow-back" : "search"}
              onPress={() => {
                if (textInputFossued) setModalVisible(false);
                setTextInputFossued(true);
              }}
              style={styles.icon2}
            />
          ) : (
            <Icon
              type="material"
              iconStyle={{ marginLeft: 3 }}
              size={28}
              color={"rgba(255, 255, 255, 0.4)"}
              // name={"search"}
              name={textInputFossued ? "arrow-back" : "search"}
              onPress={() => {
                if (textInputFossued) setModalVisible(false);
                setTextInputFossued(true);
              }}
              style={styles.icon2}
            />
          )}
        </Animatable.View>
        <TextInput
          color={"rgba(255, 255, 255, 0.5)"}
          placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
          placeholder={text}
          autoFocus={false}
          ref={textInput}
          onFocus={() => {
            setTextInputFossued(true);
          }}
          onBlur={() => {
            setTextInputFossued(false);
          }}
          onChangeText={handleSearch}
          style={{
            width: "65%",
            height: "100%",
            // backgroundColor: "red",
          }}
        />
        <Animatable.View
          animation={textInputFossued ? "fadeInLeft" : ""}
          duration={400}
        >
          {setIconVisible ? (
            <Icon
              type="material"
              iconStyle={{ marginLeft: 25 }}
              size={30}
              color={"rgba(255, 255, 255, 0.4)"}
              name={textInputFossued ? "cancel" : null}
              onPress={() => {
                textInput.current.clear();
                // handleSearch();
              }}
              style={styles.icon2}
            />
          ) : (
            <Icon
              type="material"
              iconStyle={{ marginLeft: 25 }}
              size={30}
              color={"rgba(255, 255, 255, 0.4)"}
              name={textInputFossued ? "cancel" : null}
              onPress={() => {
                textInput.current.clear();
                handleSearch();
              }}
              style={styles.icon2}
            />
          )}
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    // borderColor: "rgba(255, 255, 255, 0.3)",

    flexDirection: "row",
    // justifyContent: "flex-start",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    width: wp("90"),
    height: 50,

    paddingRight: 10,
  },

  icon2: {
    fontSize: 24,
    padding: 5,
    color: "grey",
  },
});

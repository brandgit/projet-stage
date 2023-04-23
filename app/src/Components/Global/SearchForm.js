import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IconForm } from "./IconForm";

export const SearchForm = ({
  setModalVisible,
  setModalVisible1,
  setIconVisible,
  setModalFilterVisible,
  setModalSearchVisible,
  text,
}) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        setModalSearchVisible(true);
      }}
    >
      <View style={styles.SearchArea}>
        <View style={styles.SearchArea1}>
          <Icon
            type="material"
            iconStyle={{ marginLeft: 13 }}
            size={28}
            name="search"
            color={"rgba(255, 255, 255, 0.4)"}
          />

          <Text style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.4)" }}>
            {text}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalFilterVisible(true);
          }}
        >
          {setIconVisible ? (
            <IconForm
              Name={"filter-outline"}
              Color={"rgba(255, 255, 255, 0.4)"}
              Size={25}
            />
          ) : null}
        </TouchableOpacity>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  SearchArea: {
    marginTop: 10,
    width: wp("80"),
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  SearchArea1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
});

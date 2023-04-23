import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { Normalize } from "../Global/Normalize";
import { CurserForm } from "../Global/CurserForm";
import { SportsList } from "../Global/GlobalData";
import { ChoiseSport } from "../Global/ChoiseSport";

export const NextEvents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const goTo = () => {
    console.log("Button Create new events");

    navigation.navigate("CreateEventsScreen1");
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25%",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: Normalize(17),
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          Next events
        </Text>

        <TouchableOpacity onPress={goTo}>
          <Ionicons
            name="plus-box"
            color={"#333333"}
            size={Normalize(30)}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              paddingTop: -10,
              borderRadius: 50,
              marginLeft: "12%",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 7,
        }}
      >
        <Text style={{ fontSize: Normalize(13), color: "#333333" }}>
          Filters
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Ionicons
            name="filter"
            color={"grey"}
            size={Normalize(15)}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              paddingTop: "2%",
              borderRadius: 50,
              marginLeft: "7%",
            }}
          />
        </TouchableOpacity>
      </View>
      {/**************************************************************
                        Modal View 
        **************************************************************/}
      <Modal
        style={{ backgroundColor: "yellow" }}
        backgroundColor="yellow"
        animationType="fade"
        transparent
        visible={modalVisible}
      >
        <View style={styles.WrapperModalView}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingTop: "6%",
              paddingRight: "6%",
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>Filter</Text>
            <TouchableNativeFeedback
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ color: "white", fontSize: 17, marginLeft: 13 }}>
                X
              </Text>
            </TouchableNativeFeedback>
          </View>
          <View
            style={{
              marginLeft: "6%",
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
              }}
            >
              Sports
            </Text>
          </View>
          <ChoiseSport />

          <View
            style={{
              width: "89%",
              height: 0.5,
              backgroundColor: "grey",
              marginLeft: "6%",
            }}
          ></View>
          <View
            style={{
              marginLeft: "6%",
              height: 60,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
              }}
            >
              Maximum radius
            </Text>
          </View>

          <View
            style={{
              width: "100%",

              justifyContent: "center",
            }}
          >
            <CurserForm />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  WrapperModalView: {
    // width: wp("70"),
    // width: Normalize(150),
    width: "80%",
    height: hp("40"),
    position: "absolute",
    top: "55%",

    right: 0,
    zIndex: 1,
    borderRadius: 12,
    // padding: 15,
    backgroundColor: "rgba(38, 36, 47, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(214,255,0, 0.1)",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

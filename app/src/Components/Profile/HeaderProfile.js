import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableNativeFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState, useRef } from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { SuggestedFriend } from "../Home/SuggestedFriend";
import { Normalize } from "../Global/Normalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IconForm } from "../Global/IconForm";

export const HeaderProfile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  return (
    <View
      style={{
        height: hp("36%"),
        backgroundColor: "#26242F",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      }}
    >
      <View
        style={{
          height: hp("17"),
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NotificationsScreen");
          }}
          style={{ marginTop: "12%" }}
        >
          <Ionicons color={"white"} name="bell-outline" size={34} />
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: wp("19"),
            height: hp("10"),
            backgroundColor: "rgba(75, 76, 87, 0.4)",
            marginTop: "12%",
            borderRadius: 24,
          }}
        >
          <Text style={{ color: "grey", fontWeight: "bold", fontSize: 40 }}>
            B
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={{ marginTop: "10%" }}
        >
          <Ionicons name="menu" color={"white"} size={34} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: hp("9"),
            width: 176,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
            Benjamin Z.
          </Text>
          <TouchableOpacity>
            <IconForm Name={"pencil-outline"} Color={"#ffffff"} Size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: hp("4"),
            width: 100,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <IconForm Name={"map-marker-outline"} Color={"#ffffff"} Size={20} />

          <Text style={{ color: "white", fontSize: 14 }}>Paris, France</Text>
        </View>
      </View>
      {/**************************************************************
                        Modal View Menu
        **************************************************************/}
      <Modal
        style={{ backgroundColor: "yellow" }}
        backgroundColor="yellow"
        animationType="fade"
        transparent
        visible={modalVisible}
      >
        <TouchableNativeFeedback>
          <View style={styles.WrapperModalView}>
            <View
              style={{
                marginLeft: "6%",
                // height: 50,
                justifyContent: "center",
              }}
            >
              <TouchableNativeFeedback
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    margin: 15,
                  }}
                >
                  Teams and conditions
                </Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    margin: 15,
                  }}
                >
                  Legal notice
                </Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: "#d6ff00",
                    fontSize: 16,
                    marginTop: 30,
                    marginLeft: 15,
                  }}
                >
                  Log out
                </Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 16,
                    marginTop: 10,
                    marginLeft: 15,
                  }}
                >
                  Delete my account
                </Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </TouchableNativeFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  WrapperModalView: {
    // width: wp("70"),
    // width: Normalize(150),
    width: "65%",
    height: hp("30"),
    position: "absolute",
    top: Normalize(6),

    right: 0,
    zIndex: 1,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "rgba(38, 36, 47, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(214,255,0, 0.1)",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

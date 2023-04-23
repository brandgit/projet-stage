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
import { ProfilePictureComponent } from "./ProfilePictureComponent";
import { DotsComponent } from "./DotsComponent";

export const HeaderProfileSpportifComponent = ({ Photo, Name, City }) => {
  return (
    <View
      style={{
        height: hp("36%"),
        backgroundColor: "#26242F",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        //justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View
        style={{
          height: hp("16"),
          //   backgroundColor: "red",
          width: wp("90"),
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "3%",
        }}
      >
        <ProfilePictureComponent Photo={Photo} Name={Name} City={City} />
        <DotsComponent />
      </View>
      <View
        style={{
          height: hp("13"),
          width: wp("90"),
          //   backgroundColor: "violet",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: wp("13"),
            height: hp("6"),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 15,
          }}
          onPress={() => {
            navigation.navigate("NotificationsScreen");
          }}
          //   style={{ marginTop: "12%" }}
        >
          <Ionicons color={"white"} name="message-outline" size={30} />
        </TouchableOpacity>
        <View
          style={{
            width: wp("62"),
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "orange",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            {Name}
          </Text>
          <View
            style={{
              height: hp("4"),
              //  width: wp("100"),
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              //   backgroundColor: "orange",
              justifyContent: "center",
            }}
          >
            <IconForm Name={"map-marker-outline"} Color={"#ffffff"} Size={20} />

            <Text
              style={{
                color: "white",
              }}
            >
              {City}, France
            </Text>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 14,
            }}
          >
            33 years old
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: wp("13"),
            height: hp("6"),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 15,
          }}
          onPress={() => {
            navigation.navigate("NotificationsScreen");
          }}
          //   style={{ marginTop: "12%" }}
        >
          <Ionicons color={"white"} name="account-plus-outline" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
{
  /* <View
        style={{
          height: hp("13"),

          width: wp("90"),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NotificationsScreen");
          }}
          //   style={{ marginTop: "12%" }}
        >
          <Ionicons color={"white"} name="bell-outline" size={34} />
        </TouchableOpacity>
      </View> */
}

{
  /* <View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: hp("6"),
                width: 176,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
              >
                Benjamin Z.
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   backgroundColor: "orange",
            }}
          >
            <View
              style={{
                height: hp("4"),
                width: wp("100"),
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                backgroundColor: "orange",
                justifyContent: "space-between",
              }}
            >
              <IconForm
                Name={"map-marker-outline"}
                Color={"#ffffff"}
                Size={20}
              />

              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  //   backgroundColor: "orange",
                }}
              >
                Paris, France
              </Text>
            </View>
            <View
              style={{
                // height: hp("4"),
                width: 200,
                display: "flex",
                // flexDirection: "row",
                // alignItems: "flex-end",
                backgroundColor: "orange",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  //   backgroundColor: "orange",
                }}
              >
                33 Paris France
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NotificationsScreen");
          }}
          //   style={{ marginTop: "12%" }}
        >
          <Ionicons color={"white"} name="bell-outline" size={34} />
        </TouchableOpacity>
      </View> */
}
{
  /* 
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
        <View>
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
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
              >
                Benjamin Z.
              </Text>
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
              <IconForm
                Name={"map-marker-outline"}
                Color={"#ffffff"}
                Size={20}
              />

              <Text style={{ color: "white", fontSize: 14 }}>
                Paris, France
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={{ marginTop: "10%" }}
        >
          <Ionicons name="menu" color={"white"} size={34} />
        </TouchableOpacity>*/
}

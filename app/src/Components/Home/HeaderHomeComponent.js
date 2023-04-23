import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableNativeFeedback,
} from "react-native";
import React, { useState, useRef } from "react";
import { Normalize } from "../Global/Normalize";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CurserForm } from "../Global/CurserForm";
import { ChoiseSportComponent } from "../Global/ChoiseSportComponent";
import { SuggestedFriendComponent } from "./SuggestedFriendComponent";

export const HeaderHomeComponent = () => {
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <>
      <View
        style={{
          height: "100%",
          backgroundColor: "#26242F",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: hp("12"),
            paddingLeft: "6%",
            paddingRight: "4%",
          }}
        >
          <View style={{ marginTop: "2%" }}>
            <Text
              style={{
                fontSize: Normalize(19),
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              Suggested profiles
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: "2%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: Normalize(13),
                color: "grey",
                paddingTop: "1%",
              }}
            >
              Filters
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible2(true);
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
                  marginLeft: "12%",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {/* <SuggestedFriend widthSugg={wp("45")} heightSugg={hp("30")} /> */}
          <SuggestedFriendComponent widthSugg={200} heightSugg={hp("30")} />
        </ScrollView>
        {/**************************************************************
                        Modal View 
        **************************************************************/}
        <Modal
          style={{ backgroundColor: "yellow" }}
          backgroundColor="yellow"
          animationType="fade"
          transparent
          visible={modalVisible2}
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
                  setModalVisible2(false);
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
            {/* <ChoiseSport /> */}
            {/* <ChoiseSport /> */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: "28%",
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ChoiseSportComponent name="All" icon="all-inclusive" />
                <ChoiseSportComponent name="Runnning" icon="run" />
                <ChoiseSportComponent name="Soccer" icon="soccer" />
                <ChoiseSportComponent name="Tennis" icon="tennis" />
                <ChoiseSportComponent name="Basketball" icon="basketball" />
                <ChoiseSportComponent name="Five" icon="lifebuoy" />
                <ChoiseSportComponent name="Fitness" icon="yoga" />
                <ChoiseSportComponent
                  name="Bodybuilding"
                  icon="weight-lifter"
                />
                <ChoiseSportComponent name="Hiking" icon="hiking" />
                <ChoiseSportComponent name="Snooker" icon="dots-triangle" />
                <ChoiseSportComponent name="Golf" icon="golf" />
                <ChoiseSportComponent name="Cycling" icon="bike" />
                <ChoiseSportComponent name="Boxing" icon="boxing-glove" />
                <ChoiseSportComponent name="Dance" icon="human-female-dance" />
                <ChoiseSportComponent name="Table tennis" icon="table-tennis" />
                <ChoiseSportComponent name="Baseball" icon="baseball" />
                <ChoiseSportComponent name="Ski" icon="ski" />
                <ChoiseSportComponent name="Surf" icon="surfing" />
                <ChoiseSportComponent name="Rugby" icon="rugby" />
              </ScrollView>
            </View>

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
              {/* <CurserForm /> */}
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  WrapperModalView: {
    // width: wp("70"),
    // width: Normalize(150),
    width: "80%",
    height: hp("40"),
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

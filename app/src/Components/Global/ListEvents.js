import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableNativeFeedback,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EventsList } from "./EventsList";
import { SportForm } from "./SportForm";
import { IconForm } from "../../Components/Global/IconForm";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { Normalize } from "../Global/Normalize";
import { ArticalesData, AttendeesList } from "./GlobalData";

export const ListEvents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: hp("28"),
        width: wp("100"),
        padding: 10,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <>
          {EventsList.map((Event, index) => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: hp("22"),
                width: wp("84"),
                backgroundColor: "white",
                borderRadius: 22,
                marginLeft: 6,
                marginRight: 6,
              }}
              key={index}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  height: hp("9"),
                  width: wp("78"),
                  //   backgroundColor: "red",
                }}
              >
                <SportForm
                  heightComponent={60}
                  widhtComponent={60}
                  nameIcon={Event.icon}
                  sizeIcon={40}
                />
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: hp("8"),
                    width: wp("48"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#26242F",
                      fontWeight: "bold",
                    }}
                  >
                    {Event.sport}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <IconForm
                      Name={"calendar-blank-outline"}
                      Color={"#26242F"}
                      Size={23}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      {"   "}
                      {Event.date}
                      {"   "} {Event.heure}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    height: hp("8"),
                    width: wp("13"),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                    }}
                  >
                    <IconForm
                      Name={"account-group-outline"}
                      Color={"#26242F"}
                      Size={23}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16, color: "grey" }}>
                    {Event.nbParticipated}/5
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  width: wp("82"),
                  backgroundColor: "grey",
                }}
              ></View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  height: hp("9"),
                  width: wp("78"),
                }}
              >
                <View
                  style={{
                    display: "flex",
                    height: hp("6"),
                  }}
                >
                  <IconForm
                    Name={"map-marker-outline"}
                    Color={"#26242F"}
                    Size={23}
                  />
                </View>

                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: hp("8"),
                    width: wp("78"),
                  }}
                >
                  <Text style={{ fontSize: 16, color: "grey", marginLeft: 9 }}>
                    {Event.addess}
                  </Text>
                  <Text style={{ fontSize: 16, color: "grey", marginLeft: 9 }}>
                    {Event.cp}
                    {"  "}

                    {Event.city}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </>
      </ScrollView>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const ModalComponent = (props) => {
  return (
    <>
      <Modal
        style={{ backgroundColor: "yellow" }}
        backgroundColor="red"
        animationType="fade"
        transparent
        visible={props.modalVisible}
      >
        <View
          style={{
            backgroundColor: "rgba(38, 36, 47, 0.9)",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={styles.WrapperModalView}>
            <View
              style={{
                paddingTop: Normalize(10),
                paddingRight: "6%",

                height: hp("6"),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "white", fontSize: 17 }}>
                  Attendees ( 33)
                </Text>
                <TouchableNativeFeedback
                  onPress={() => {
                    props.setModalVisible(false);
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 17, marginLeft: 13 }}
                  >
                    X
                  </Text>
                </TouchableNativeFeedback>
              </View>
            </View>

            <View
              style={{
                height: hp("36.5"),
              }}
            >
              <ScrollView>
                <>
                  {AttendeesList.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: Normalize(40),
                          width: Normalize(40),
                          // backgroundColor: "red",
                          marginBottom: "4%",
                          // backgroundColor: "yellow",
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 200,
                          }}
                        />
                      </View>
                      <View style={{ marginBottom: "4%", marginLeft: "6%" }}>
                        <Text style={{ fontSize: 15, color: "white" }}>
                          {item.userName}
                        </Text>
                      </View>
                    </View>
                  ))}
                </>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  WrapperModalView: {
    // width: wp("70"),
    // width: Normalize(150),
    width: "80%",
    height: hp("45"),
    marginTop: "20%",
    // position: "absolute",
    // top: "55%",

    // right: 0,
    // zIndex: 1,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "rgba(38, 36, 47, 1)",
    borderWidth: 1,
    borderColor: "rgba(214,255,0, 0.1)",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EventsList } from "./EventsList";
import { SportForm } from "./SportForm";
import { IconForm } from "../../Components/Global/IconForm";

import { ProfilePhotoForm } from "../../Components/Global/ProfilePhotoForm";

export const ListEventsComing = () => {
  return (
    <View
      style={{
        height: hp("38"),
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
                height: hp("30"),
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
                      fontWeight: "900",
                    }}
                  >
                    {" "}
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
                  <IconForm
                    Name={"account-group-outline"}
                    Color={"#26242F"}
                    Size={23}
                  />
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  height: hp("9"),
                  width: wp("78"),
                  // backgroundColor: "red",
                }}
              >
                <ProfilePhotoForm
                  PhotoUser={Event.image}
                  widhtPhoto={60}
                  heightPhoto={60}
                />

                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: hp("6"),
                    width: wp("38"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#26242F",
                      fontWeight: "900",
                    }}
                  >
                    {" "}
                    {Event.userName}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",

                        fontSize: 13,
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      [Organizer]
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    height: hp("5"),
                    width: wp("24"),
                    borderRadius: 13,
                    borderWidth: 2,
                    borderColor: "#OOOOOO",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "900",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

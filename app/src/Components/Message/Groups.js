import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { IconForm } from "../Global/IconForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EventsList, Attendess } from "../../Components/Global/EventsList";
import { PhotoList } from "../../Components/Global/EventsList";
import { SportForm } from "../../Components/Global/SportForm";
// import { IconForm } from "../../Components/Global/IconForm";

export const Groups = (props) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: hp("28"),
        // width: wp("100"),
        // padding: 10,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <>
          {EventsList.map((Event, index) => (
            <View
              key={index}
              style={{
                height: hp("24"),
                // height: hp("28"),
                // width: wp("100"),
                // padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: hp("22"),
                  width: wp("88"),
                  backgroundColor: "white",
                  borderRadius: 22,
                  marginLeft: 6,
                  marginRight: 6,
                }}
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
                    heightComponent={50}
                    widhtComponent={50}
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
                  <>
                    {PhotoList.map((Photo, Index) => (
                      <View
                        key={Index}
                        style={{
                          width: 45,
                          height: 47,
                          backgroundColor: "grey",
                          borderRadius: 12,
                          backgroundColor: "yellow",
                        }}
                      >
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 12,
                          }}
                          source={Photo.photo}
                        />
                      </View>
                    ))}
                  </>
                  <>
                    {Attendess.map((A, Index) => (
                      <View
                        key={Index}
                        style={{
                            justifyContent:"center",
                            alignItems:"center",
                          width: 45,
                          height: 47,
                          backgroundColor: "#26242F",
                          borderRadius: 12,
                        
                        }}
                      >
                        <Text
                          style={{
                            width: 47,
                            height: 28,
                            backgroundColor: "#26242F",
                            borderRadius: 12,
                            color: "white",
                            // fontWeight: "bold",
                            textAlign: "center",
                            fontSize: 17,
                          }}
                        >
                        {"+"}{A.Nombur}
                        </Text>
                      </View>
                    ))}
                  </>

                  <View
                  
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems:"flex-end",
                      height: hp("8"),
                      width: wp("35"),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      {Attendess.Nombur} {"attendess"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  FlatList,
  TouchableOpacity,
  Keyboard,
  Modal,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import { Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IconForm } from "../Global/IconForm";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { FilterData } from "../Global/GlobalData";
import filter from "lodash/filter";
import { Normalize } from "../../Components/Global/Normalize";
import ListSearchEnvet from "../Global/ListSearchEnvet";
import { SaerchModalForm } from "../Global/SaerchModalForm";
import { SportForm } from "../Global/SportForm";

export const ModalSearchBarMap = ({
  setModalSearchVisible,
  modalSearchVisible,
  textInputFossued,
  setTextInputFossued,
  textInput,
}) => {
  const navigation = useNavigation();

  //   const [modalVisible, setModalVisible] = useState(false);
  // const [textInputFossued, setTextInputFossued] = useState(true);
  // const textInput = useRef(0);
  const [data, setData] = useState([...FilterData]);

  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const dataS = filter(FilterData, (userSearch) => {
      return contains(userSearch, text);
    });

    setData([...dataS]);
  };

  return (
    <Modal
      //
      // backgroundColor="yellow"
      animationType="fade"
      transparent
      visible={modalSearchVisible}
    >
      <SaerchModalForm
        textInputFossued={textInputFossued}
        setModalSearchVisible={setModalSearchVisible}
        setTextInputFossued={setTextInputFossued}
        handleSearch={handleSearch}
        textInput={textInput}
        text="Search ( sport, county )"
      />
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.modal}>
            <View style={styles.WrappSearchList}>
              <View
                style={{
                  height: hp("13"),
                  backgroundColor: "red",
                  alignSelf: "flex-start",
                  marginLeft: 20,
                }}
              ></View>

              {/*********************************************************************************
                                           Modal Search Header
            *********************************************************************************/}

              <View style={styles.HeaderModal}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: Normalize(15),
                      color: "#d6ff00",
                    }}
                  >
                    Search List
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      if (!textInputFossued) setModalSearchVisible(false);
                      setTextInputFossued(false);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: Normalize(15),
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/*********************************************************************************
                                            Modal Search List
            *********************************************************************************/}
              <>
                {data.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      Keyboard.dismiss;
                      navigation.navigate("MapScreen", {
                        item: item.name,
                      });
                      setModalSearchVisible(false);
                      setTextInputFossued(true);
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: hp("22"),
                        width: wp("95"),
                        backgroundColor: "white",
                        borderRadius: 22,
                        marginLeft: 6,
                        marginRight: 6,
                        marginBottom: 6,
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
                          nameIcon={item.icon}
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
                            {item.sport}
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
                              {item.date}
                              {"   "} {item.heure}
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
                              setModalSearchVisible(true);
                            }}
                          >
                            <IconForm
                              Name={"account-group-outline"}
                              Color={"#26242F"}
                              Size={23}
                            />
                          </TouchableOpacity>
                          <Text style={{ fontSize: 16, color: "grey" }}>
                            {item.nbParticipated}/5
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
                          <Text
                            style={{
                              fontSize: 16,
                              color: "grey",
                              marginLeft: 9,
                            }}
                          >
                            {item.addess}
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              color: "grey",
                              marginLeft: 9,
                            }}
                          >
                            {item.cp}
                            {"  "}

                            {item.city}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </>

              <View
                style={{
                  height: hp("7"),
                  backgroundColor: "red",
                  alignSelf: "flex-start",
                  marginLeft: 20,
                }}
              ></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  HeaderModal: {
    height: 80,
    width: "100%",
    backgroundColor: "rgba(38, 36, 47, 0.9)",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: Normalize(5),
    marginBottom: Normalize(10),

    paddingLeft: Normalize(20),
    paddingRight: Normalize(20),
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(255, 255, 255, 0.6)",
  },
  text1: {
    color: "grey",
    fontSize: 16,
  },

  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    flexDirection: "row",
    // justifyContent: "flex-start",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    width: wp("90"),
    height: 50,

    paddingRight: 10,
    // marginTop: Normalize(32),
    marginTop: "9%",
  },

  SearchAreaFossued: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    width: wp("60"),
    height: 50,
  },

  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: "grey",
  },

  view1: {
    // height: Normalize(50),
    height: hp("17"),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(214, 255, 255, 1)",
    backgroundColor: "rgba(38, 36, 47, 1)",
    // backgroundColor: "rgba(255, 255, 255, 0.6)",
    paddingTop: Normalize(15),
    position: "absolute",
    top: Normalize(0),
    left: 0,
    right: 0,
    zIndex: 1,
    // top: Normalize(220),
    // left: 0,
    // right: 0,
    // zIndex: 1,
  },

  view2: {
    height: hp("50"),
    flexDirection: "row",
    // padding: 25,
    alignItems: "center",
    // backgroundColor: "orange",
  },

  icon2: {
    fontSize: 24,
    padding: 5,
    color: "grey",
  },

  modal: {
    width: Dimensions.get("window").width,
    // height: hp("90"),
    // height: Dimensions.get("screen").height,
    // height: hp("100%"),
    backgroundColor: "red",
    backgroundColor: "rgba(38, 36, 47, 0.9)",
  },
  WrappSearchList: {
    height: "100%",
    justifyContent: "center",

    // paddingTop: "36%",
    backgroundColor: "rgba(38, 36, 47, 0.9)",
  },
  WrappItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Normalize(60),
    backgroundColor: "rgba(38, 36, 47, 0.9)",
    // borderRadius: 22,
    // marginBottom: 12,
    borderBottomWidth: 1,
    // borderTopWidth: 0.5,
    borderBottomColor: "rgba(255, 255, 255, 0.6)",

    // marginLeft: Normalize(15),
  },
  WrapperModalView: {
    // width: wp("70"),
    // width: Normalize(150),
    width: "80%",
    height: hp("40"),
    position: "absolute",
    top: Normalize(6),
    // left: 0,
    right: 0,
    zIndex: 1,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "rgba(38, 36, 47, 0.9)",
    // backgroundColor: "#26242F",
    borderWidth: 1,
    borderColor: "rgba(214,255,0, 0.1)",
  },
});

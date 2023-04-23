import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { Normalize } from "../../Components/Global/Normalize";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { TitleFormH2 } from "../../Components/Global/TitleFormH2";
import { normalize } from "../../Components/Global/NameMessages";
import { SearchForm } from "../../Components/Global/SearchForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import filter from "lodash/filter";
import { FilterData } from "../../Components/Global/GlobalData";
import { SaerchModalForm } from "../../Components/Global/SaerchModalForm";
import { SaerchModalMessageForm } from "../../Components/Message/SerachModalMessageForm";

export const CreateGroupScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const setIconVisible = useRef(true);
  const textInput = useRef(0);
  const [data, setData] = useState([...FilterData]);

  const contains = ({ userName }, query) => {
    if (userName.includes(query)) {
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
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        alignItems: "center",
        backgroundColor: "#26242F",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingRight: "5%",
          // backgroundColor: "red",
        }}
      >
        <ButtonBackForm
          text="Back to Create Events Screen 1"
          textColor="#ffffff"
          fontWeight="bold"
          widthButton={Normalize(100)}
          heightButton={35}
          navigation={navigation}
          screen="MessagesGroupsScreen"
          size={17}
        />

        <ButtonForm
          text="Next"
          textColor="#000"
          bgColor="#d6ff00"
          fontWeight="bold"
          widthButton={Normalize(70)}
          heightButton={30}
          navigation={navigation}
          screen="CreateGroupScreen1"
          size={17}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: "7%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
          // marginBottom: 100,
          // backgroundColor: "orange",
        }}
      >
        <Text style={{ fontSize: normalize(20), color: "white" }}>
          Create a new group
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
          // marginBottom: 100,
          backgroundColor: "orange",
        }}
      >
        <SaerchModalMessageForm
          textInputFossued={textInputFossued}
          setModalVisible={setModalVisible}
          setTextInputFossued={setTextInputFossued}
          handleSearch={handleSearch}
          setIconVisible={setIconVisible}
          textInput={textInput}
          text="Search ( sport, country )"
        />
      </View>
      <View
        style={{
          height: "15%",
          width: wp("100"),
          // backgroundColor: "yellow",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            height: 80,
            width: wp("20"),
            // backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center",
            // marginBottom: 6,
            // paddingLeft: "5%",
          }}
        >
          <View
            style={{
              // height: Normalize(40),
              // width: Normalize(40),
              height: 55,
              width: 55,
              backgroundColor: "red",
              borderRadius: 20,
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                // height: Normalize(40),
                // width: Normalize(40),
                height: 20,
                width: 20,
                backgroundColor: "white",
                borderRadius: 200,
              }}
            ></View>
          </View>
          <View>
            <Text style={{ color: "white" }}>userName</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // height: Normalize(40),
              // width: Normalize(40),
              height: 2,
              width: "95%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          height: "52%",
          width: wp("100"),
          backgroundColor: "#26242F",
          marginBottom: 6,
          paddingLeft: "5%",
        }}
      >
        <ScrollView>
          <>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  Keyboard.dismiss;
                  // navigation.navigate("CreatGroupScreen", {
                  //   item: item.name,
                  // });
                  setModalVisible(false);
                  setTextInputFossued(false);
                }}
              >
                <View
                  style={{
                    // display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    height: hp("10"),
                    width: wp("100"),
                    backgroundColor: "#26242F",
                  }}
                  key={index}
                >
                  <View
                    style={{
                      // height: Normalize(40),
                      // width: Normalize(40),
                      height: 50,
                      width: 50,
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
                  <View
                    style={{
                      marginLeft: "5%",
                    }}
                  >
                    <Text style={{ color: "white" }}>{item.userName}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            {/* <View style={{ height: "20%" }}></View> */}
          </>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderModal: {
    height: 80,
    width: "100%",
    // backgroundColor: "red",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: Normalize(5),
    marginBottom: Normalize(10),

    paddingLeft: Normalize(20),
    paddingRight: Normalize(20),
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(255, 255, 255, 0.6)",
    // borderBottomColor: "yellow",
  },
  Wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Wrapper1: {
    height: "70%",
    width: "100%",
    // backgroundColor: "red",
  },
});

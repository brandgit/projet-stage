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
import { BlurView } from "expo-blur";
import React, { useState, useRef } from "react";
import { Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SportForm } from "./SportForm";
import { IconForm } from "./IconForm";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { FilterData } from "./GlobalData";
import filter from "lodash/filter";
import { Normalize } from "../../Components/Global/Normalize";
import ListSearchEnvet from "./ListSearchEnvet";
import { ModalSearchBarMap } from "../../Components/Map/ModalSearchBarMap";
import { ProfilePhotoForm } from "../../Components/Global/ProfilePhotoForm";
import { ChoiseSport } from "./ChoiseSport";
import { CurserForm } from "./CurserForm";
import { SearchForm } from "./SearchForm";
import { SaerchModalForm } from "./SaerchModalForm";
import { ChoiseSportComponent } from "./ChoiseSportComponent";

export const SearchComponent = (props) => {
  const navigation = useNavigation();

  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef(0);
  const setIconVisible = useRef(true);
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
    <View>
      <SearchForm
        text="Search ( sport, country )"
        setModalVisible={setModalVisible}
        setModalVisible1={setModalVisible1}
        setModalFilterVisible={setModalFilterVisible}
        setModalSearchVisible={setModalSearchVisible}
        setIconVisible={setIconVisible}
      />
      {/*********************************************************************************
                                   ModalSearch
      *********************************************************************************/}
      <ModalSearchBarMap
        setModalSearchVisible={setModalSearchVisible}
        modalSearchVisible={modalSearchVisible}
        textInputFossued={textInputFossued}
        setTextInputFossued={setTextInputFossued}
        handleSearch={handleSearch}
        textInput={textInput}
      />
      {/*********************************************************************************
                                   Modal Filter View2
      *********************************************************************************/}
      <Modal
        // style={{ backgroundColor: "yellow" }}
        // backgroundColor="yellow"
        animationType="fade"
        transparent
        visible={modalFilterVisible}
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
                setModalFilterVisible(false);
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
              <ChoiseSportComponent name="Bodybuilding" icon="weight-lifter" />
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
    height: Dimensions.get("screen").height,
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

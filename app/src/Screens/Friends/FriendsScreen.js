import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import { Normalize } from "../../Components/Global/Normalize";
import { TitleInput } from "../../Components/Global/TitleInput";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";
import { Button } from "../../Components/Global/Button";
import { SearchBar } from "@rneui/themed";
import { ProfileList } from "../../Components/Home/ProfileList";
import { SearchDropDown } from "../../Components/Friends/SearchDropDown";
import FormInputGroup from "../../Components/Global/FormInputGroup";
import FormInput from "../../Components/Global/FormInput";
import { KeyboardAvoidingWrapper } from "../../Components/Global/KeyboardAvoidingWrapper";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";
import { ButtonForm } from "../../Components/Global/ButtonForm";

import { useNavigation } from "@react-navigation/native";

import { TitleFormH2 } from "../../Components/Global/TitleFormH2";
import { normalize } from "../../Components/Global/NameMessages";
import { SearchForm } from "../../Components/Global/SearchForm";
import filter from "lodash/filter";
import { FilterData } from "../../Components/Global/GlobalData";
import { SaerchModalForm } from "../../Components/Global/SaerchModalForm";

export function FriendsScreen({ navigation }) {
  const [searching, setSearching] = useState(false);
  const [email, setEmail] = useState("");
  const onSearch = (text) => {
    setSearching(true);
  };

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

  return (
    <>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          height: hp("25"),
          backgroundColor: "#26242F",
          borderBottomRightRadius: 35,
          borderBottomLeftRadius: 35,
          padding: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="account-multiple-outline"
            color={"#ffffff"}
            size={Normalize(26)}
            style={{
              display: "flex",
              textAlign: "center",

              marginRight: 10,
            }}
          />
          <TitleInput title="Friends" />
        </View>
        <TouchableOpacity>
          <Ionicons
            name="plus"
            color={"#ffffff"}
            size={Normalize(28)}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "right",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          height: "13%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
          // marginBottom: 100,
        }}
      >
        <SaerchModalForm
          textInputFossued={textInputFossued}
          setModalVisible={setModalVisible}
          setTextInputFossued={setTextInputFossued}
          handleSearch={handleSearch}
          setIconVisible={setIconVisible}
          textInput={textInput}
          text="Search ( sport, country )"
          borderColor="#26242F"
          BackgroundColor="red"
        />
      </View>
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {ProfileList.map((Profil, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                height: hp("9"),
                width: wp("90"),
              }}
            >
              <View
                key={Profil.id}
                style={{
                  width: 45,
                  height: 47,
                  backgroundColor: "grey",
                  borderRadius: 12,

                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 12,
                  }}
                  source={Profil.image}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: wp("60"),
                  height: hp("7"),
                  // backgroundColor: "yellow",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "900",
                  }}
                >
                  {Profil.userName}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  {Profil.message}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  color: "grey",
                  fontWeight: "bold",
                }}
              >
                {"..."}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "90%",
    backgroundColor: "#ffffff",
  },
  textInput: {
    backgroundColor: "grey",
    width: "80%",
    borderRadius: 10,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});

// <FlatList
// data={ProfileList}
// renderItem={({ item }) => (
//   <View
//     key={item.id}
//     style={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       flexDirection: "row",
//       height: hp("9"),
//       width: wp("90"),
//     }}
//   >
//     <View
//       key={item.id}
//       style={{
//         width: 45,
//         height: 47,
//         backgroundColor: "grey",
//         borderRadius: 12,
//         backgroundColor: "yellow",
//       }}
//     >
//       <Image
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: 12,
//         }}
//         source={item.image}
//       />
//     </View>
//     <View
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         justifyContent: "center",
//         width: wp("60"),
//         height: hp("7"),
//         // backgroundColor: "yellow",
//       }}
//     >
//       <Text
//         style={{
//           fontSize: 13,
//           color: "black",
//           fontWeight: "900",
//         }}
//       >
//         {item.userName}
//       </Text>
//       <Text
//         style={{
//           fontSize: 13,
//           color: "grey",
//           fontWeight: "bold",
//         }}
//       >
//         {item.message}
//       </Text>
//     </View>
//     <Text
//       style={{
//         fontSize: 13,
//         color: "grey",
//         fontWeight: "bold",
//       }}
//     >
//       {"..."}
//     </Text>
//   </View>
// )}
// keyExtractor={(item, index) => index.toString()}
// />

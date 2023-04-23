import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NameMessages, normalize } from "../../Components/Global/NameMessages";
import { Textinput } from "../../Components/Global/TextInput";
import { Button } from "../../Components/Global/Button";
import { FormContainer } from "../../Components/Global/FormContainer";
import { Normalize } from "../../Components/Global/Normalize";
import { TitleInput } from "../../Components/Global/TitleInput";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButton } from "../../Components/Global/IconButton";
import { AddButton } from "../../Components/Global/AddButton";
import { ProfileList } from "../../Components/Home/ProfileList";

import { IconForm } from "../../Components/Global/IconForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ButtonsMessage,
  ViewMessages,
} from "../../Components/Message/ButtonsMessage";
import { CreateGroupScreen } from "./CreateGroupScreen";

export const MessagesGroupsScreen = () => {
  const navigation = useNavigation();
  const [shouldShow, setShouldShow] = useState(true);

  const goTo = () => {
    console.log("Button CreateGroupScreen");
    navigation.navigate("CreateGroupScreen");
  };

  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          height: hp("25"),
          backgroundColor: "#26242F",
          borderBottomRightRadius: 35,
          borderBottomLeftRadius: 35,
          padding: 15,
          // backgroundColor:"yellow"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="message-outline"
            color={"#ffffff"}
            size={Normalize(26)}
            style={{
              display: "flex",
              textAlign: "center",

              marginRight: 10,
            }}
          />

          <TitleInput title="Message" />
        </View>
        <TouchableOpacity onPress={goTo}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ButtonsMessage SetShouldShow={setShouldShow} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "90%",
    backgroundColor: "#ffffff",
  },
});

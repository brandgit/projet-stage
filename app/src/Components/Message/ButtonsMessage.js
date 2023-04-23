import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ProfileList } from "../../Components/Home/ProfileList";
import { IconForm } from "../Global/IconForm";
import { Groups } from "./Groups";
import { Users } from "./Users";
import { Normalize } from "../Global/Normalize";

export const ButtonsMessage = (props) => {
  const [activeTab, setActiveTab] = useState("#d6ff00");
  const [shouldShow, setShouldShow] = useState(null);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          justifyContent:"space-between",
          width:wp("80"),
          paddingVertical:20,
        //   backgroundColor:"yellow"
        }}
      >
       
        <Buttons
          Text="Groups"
          NameIcon="account-group-outline"
          bgColor="grey"
          ActiveTab={activeTab}
          SetActiveTab={setActiveTab}
          SetShouldShow={setShouldShow}
          ShouldShow={shouldShow}
        />
        <Buttons
          Text="Users"
          NameIcon="account-outline"
          bgColor="#d6ff00"
          ActiveTab={activeTab}
          SetActiveTab={setActiveTab}
          SetShouldShow={setShouldShow}
          ShouldShow={shouldShow}
        />
      </View>
      <ViewMessages
        Text="Groups"
        SetShouldShow={setShouldShow}
        ShouldShow={shouldShow}
      />
    </>
   
  );
};

const Buttons = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.ActiveTab === props.bgColor ? "#d6ff00" : "grey",
    
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:50,
        width: Normalize(125),
        borderRadius: 15,
      }}
      onPress={() => {
        props.SetActiveTab(props.bgColor);
        props.SetShouldShow(props.Text);
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: Normalize(70),
        }}
      >
        <Ionicons size={24} name={props.NameIcon} />
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
            fontSize: Normalize(13),
            fontWeight: "900",
            marginLeft:10
          }}
        >
          {props.Text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const ViewMessages = (props) => {
  return (
    <>
      <View>
        {props.ShouldShow === props.Text ? <Groups /> : <Users/>}
      </View>
    </>
  );
};



const styles = StyleSheet.create({});

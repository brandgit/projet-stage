import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

export const ButtonChooseSportForm = (props) => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);
  const [notActive, setNotActive] = useState(true);
  const [bgColor, setBgColor] = useState("grey");
  // console.log(props.id);
  const toggele = () => {
    if (!click) {
      let userChoice = {
        ChooseYouorPracticedSports: props.icon,
      };
      axios
        .patch(
          `http://10.0.2.2:8080/api/user/selectButton/` + props.id,
          userChoice
        )
        .then((res) => {
          let reposeReq = res.data;
          console.log(reposeReq);
        });
    } else {
      let userChoice = {
        ChooseYouorPracticedSports: props.icon,
      };
      axios
        .patch(
          `http://10.0.2.2:8080/api/user/unSelectButton/` + props.id,
          userChoice
        )
        .then((res) => {
          let reposeReq = res.data;
          console.log(reposeReq);
        });
    }
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
        width: "24%",
        height: 110,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          toggele();
          setClick(true);
          if (click === true) {
            setClick(false);
          }
        }}
        style={{
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
          width: 70,
          height: 70,
          // backgroundColor: isActive() && click ? "#d6ff00" : "grey",
          backgroundColor: click ? "#d6ff00" : "grey",
          borderRadius: 15,
        }}
      >
        <View
          style={{
            backgroundColor: click ? "#d6ff00" : "grey",
            width: 70,
            height: 70,
            justifyContent: "center",

            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <Ionicons size={40} color="white" name={props.icon} />
        </View>
      </TouchableOpacity>
      <Text style={{ marginTop: 10, color: "grey" }}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
// {
//     name: "Runnning",
//     icon: "run",
//   },
//   {
//     name: "Soccer",
//     icon: "soccer",
//   },
//   {
//     name: "Tennis",
//     icon: "tennis",
//   },
//   {
//     name: "Basketball",
//     icon: "basketball",
//   },

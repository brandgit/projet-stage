import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
import React from "react";

import { Normalize } from "../../Components/Global/Normalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HeaderProfile } from "../../Components/Profile/HeaderProfile";
import { CreatEvents } from "./CreatEvents";
import { TitleFormH2 } from "../../Components/Global/TitleFormH2";
import { IconForm } from "../../Components/Global/IconForm";
import { SportsListBenjamin } from "../../Components/Global/SportsList";
import { ButtonCompleteProfile } from "../../Components/Profile/ButtonCompleteProfile";
import { ListSportUser } from "../../Components/Profile/ListSportUser";
import { NumberEvents } from "../../Components/Profile/NumberEvents";
import { ListEvents } from "../../Components/Global/ListEvents";
import { ListEventsComing } from "../../Components/Global/ListEventsComing";
import { useNavigation } from "@react-navigation/native";

export function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {/* Header Page  */}
      <View
        style={{
          height: hp("40"),
        }}
      >
        <HeaderProfile />
        <ButtonCompleteProfile />
      </View>

      <View
        style={{
          height: hp("5"),
          width: 230,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 22,

        }}
      >
        <TitleFormH2 Color="black" Title={"Practiced sports"} />
        <TouchableOpacity
          onPress={() => navigation.navigate("YourPracticedSportsScreen")}
        >
          <IconForm Name={"pencil-outline"} Color={"#26242F"} Size={30} />
        </TouchableOpacity>
      </View>
      <ListSportUser />
      {/* Comming events */}
      <View
        style={{
          height: hp("6"),
          width: 280,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 20,

        }}
      >
        <TitleFormH2 Title={"Comming events"} />
        <NumberEvents Number={7} />
      </View>
      <ListEventsComing />
      {/* Created events */}
      <View
        style={{
          height: hp("6"),
          width: 280,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 20,
        }}
      >
        <TitleFormH2 Title={"Created events"} />
        <NumberEvents Number={2} />
      </View>
      <ListEvents />

      {/* Practiced sports */}
      <View
        style={{
          height: hp("6"),
          width: 280,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 22,
        }}
      >
        <TitleFormH2 Title={"Participated events"} />
        <NumberEvents Number={13} />
      </View>
      <ListEvents />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

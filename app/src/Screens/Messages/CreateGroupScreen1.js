import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { TitleInput } from "../../Components/Global/TitleInput";

import { Normalize } from "../../Components/Global/Normalize";

import FormInputGroup from "../../Components/Global/FormInputGroup";
import FormInput from "../../Components/Global/FormInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AddImage } from "../../Components/Global/AddImage";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";

export const CreateGroupScreen1 = ({ navigation }) => {
  const [groupName, setGroupName] = useState("");
  return (
    <ScrollView
      style={{
        flex: 1,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "#26242F",
      }}
      showsVerticalScrollIndicator={false}
    >
      <ButtonBackForm
        text="Back to Create Group Screen"
        textColor="#ffffff"
        fontWeight="bold"
        widthButton={Normalize(100)}
        heightButton={35}
        navigation={navigation}
        screen="CreateGroupScreen"
        size={17}
      />
      <View
        style={{
          width: wp("100"),
          height: hp("20"),
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: Normalize(20), color: "white" }}>
          Create a new group
        </Text>
      </View>
      <FormInputGroup>
        <FormInput
          text="Group name"
          onChangeText={(text) => setGroupName(text)}
          value={groupName}
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </FormInputGroup>
      <View
        style={{
          width: wp("100"),
          height: hp("20"),
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <ButtonForm
          text="Next"
          textColor="#000"
          bgColor="#d6ff00"
          fontWeight="bold"
          widthButton={Normalize(145)}
          heightButton={40}
          navigation={navigation}
          screen="Congratulations1Sreen"
          size={16}
          marginTopButton="6%"
          heightButtonR={hp("10%")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

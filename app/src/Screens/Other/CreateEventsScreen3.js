import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { TitleFormH2 } from "../../Components/Global/TitleFormH2";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { Normalize } from "../../Components/Global/Normalize";
import FormInputGroup from "../../Components/Global/FormInputGroup";
import FormInput from "../../Components/Global/FormInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";

export const CreateEventsScreen3 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "#26242F",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ButtonBackForm
          text="Back to Create Events Screen 2"
          textColor="#ffffff"
          fontWeight="bold"
          widthButton={Normalize(100)}
          heightButton={35}
          navigation={navigation}
          screen="CreateEventsScreen2"
          size={17}
        />
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 80,
          }}
        >
          <Ionicons
            style={{ marginRight: 10 }}
            size={25}
            color="white"
            name={"calendar"}
          />
          <TitleFormH2 color="white" Title="Create event" />
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "white",
              marginBottom: "1%",
              textAlign: "center",
            }}
          >
            Description
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            marginBottom: "8%",
            textAlign: "center",
          }}
        >
          (Optional)
        </Text>
        <View
          style={{
            height: hp("40"),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            style={{
              height: hp("40"),
              width: Normalize(290),
              borderRadius: 18,
              margin: 20,
              padding: 20,
              color: "rgba(255, 255, 255, 0.5)",
            }}
            textAlignVertical={"top"}
            multiline={true}
            backgroundColor={"rgba(255, 255, 255, 0.1)"}
            placeholder={"Your description (X words max)"}
            placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
            textColor={"rgba(255, 255, 255, 0.5)"}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            height: 60,
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <ButtonForm
            text="Next"
            textColor="#000"
            bgColor="#d6ff00"
            fontWeight="bold"
            widthButton={Normalize(130)}
            heightButton={45}
            navigation={navigation}
            screen="CongratulationsSreen"
            size={17}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

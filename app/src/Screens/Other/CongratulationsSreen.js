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

export const CongratulationsSreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "#26242F",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "30%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Ionicons
          style={{ marginRight: 10 }}
          size={65}
          color="#d6ff00"
          name={"check-circle-outline"}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "900",
            color: "white",
            marginBottom: "1%",
            textAlign: "center",
          }}
        >
          Congratulations
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "20%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "white",
            textAlign: "center",
          }}
        >
          Your event was created
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            textAlign: "center",
          }}
        >
          successfully !
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: 10,
          alignItems: "center",
        }}
      >
        <ButtonForm
          text="Ok"
          textColor="#000"
          bgColor="#d6ff00"
          fontWeight="bold"
          widthButton={Normalize(130)}
          heightButton={45}
          navigation={navigation}
          screen="TabNavigation"
          size={17}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

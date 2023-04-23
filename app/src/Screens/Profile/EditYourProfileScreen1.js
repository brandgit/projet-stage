import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { TitleInput } from "../../Components/Global/TitleInput";
import { Button } from "../../Components/Global/Button";
import { Normalize } from "../../Components/Global/Normalize";
import { ButtonBack } from "../../Components/Global/ButtonBack";
import FormInputGroup from "../../Components/Global/FormInputGroup";
import FormInput from "../../Components/Global/FormInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import FormInput from "../../Components/Global/FormInput";
import { SelectlForm } from "../../Components/Global/SelectlForm";
import { CountryList } from "../../Components/YourProfile/CountryList";
// import { TitleInput } from "../../Components/Global/TitleInput";

export const EditYourProfileScreen1 = ({ navigation }) => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [description, setDescription] = useState("");

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
      {/* Bouton retour de l'application */}
      <ButtonBack
        text="Next"
        textColor="#ffffff"
        fontWeight="bold"
        widthButton={Normalize(100)}
        heightButton={35}
        navigation={navigation}
        screen="ProfileScreen"
        size={17}
      />
      <TitleInput title="Edit your profil" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: wp("19"),
            height: hp("10"),
            backgroundColor: "rgba(75, 76, 87, 0.4)",
            margin: "8%",
            borderRadius: 24,
            borderColor: "#d6ff00",
            borderWidth: 1,
          }}
        >
          <Ionicons
            style={{ marginTop: "10%" }}
            color={"rgba(255, 255, 255, 0.5)"}
            name="image-outline"
            size={34}
          />
        </View>
      </View>
      <FormInputGroup>
        <FormInput
          text="Name"
          onChangeText={(text) => setName(text)}
          value={name}
          borderColor="#26242F"
        />
      </FormInputGroup>
      <FormInputGroup>
        <FormInput
          text="First Name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          borderColor="#26242F"
        />
      </FormInputGroup>
      <FormInputGroup>
        {/* <SelectlForm options={CountryList} onChangeSelect={(country) => alert(country)} Text="Country" /> */}
        <SelectlForm
          options={CountryList}
          onChangeSelect={(id) => alert(id)}
          Text="Country"
          borderColor="#26242F"
        />
      </FormInputGroup>
      <FormInputGroup>
        {/* <SelectlForm options={CountryList} onChangeSelect={(country) => alert(country)} Text="Country" /> */}
        <SelectlForm
          options={CountryList}
          onChangeSelect={(id) => alert(id)}
          Text="City"
          borderColor="#26242F"
        />
      </FormInputGroup>
      <View
        style={{
          height: hp("5"),
        }}
      ></View>
      <FormInputGroup>
        <FormInput
          text="Date of birth (optional)"
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
          borderColor="#d6ff00"
        />
      </FormInputGroup>
      <View
        style={{
          // height: hp("10"),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: 20,
          // backgroundColor: "red",
        }}
      >
        <TextInput
          style={{
            height: hp("25"),
            width: Normalize(290),
            borderRadius: 18,
            margin: 10,
            padding: 20,
            color: "rgba(255, 255, 255, 0.5)",
            borderWidth: 1,
            borderColor: "#d6ff00",
          }}
          textAlignVertical={"top"}
          multiline={true}
          backgroundColor={"rgba(255, 255, 255, 0.1)"}
          placeholder={"Your description (X words max)"}
          placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
          textColor={"rgba(255, 255, 255, 0.5)"}
        />
      </View>
      <Button
        text="Save"
        textColor="#000"
        bgColor="#d6ff00"
        fontWeight="bold"
        widthButton={Normalize(145)}
        heightButton={40}
        navigation={navigation}
        screen="ProfileScreen"
        size={16}
        marginTopButton="6%"
        heightButtonR={hp("10%")}
      />
      <View
        style={{
          height: hp("5"),
        }}
      ></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

import {
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Normalize } from "../../Components/Global/Normalize";
import FormInputGroup from "../../Components/Global/FormInputGroup";
import FormInput from "../../Components/Global/FormInput";
import { SelectlForm } from "../../Components/Global/SelectlForm";
import { CountryList } from "../../Components/YourProfile/CountryList";
import { CityList } from "../../Components/YourProfile/CityList";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { TitleInputForm } from "../../Components/Global/TitleInputForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";

import { UserIdContext } from "../../Components/Context/AppContext";
import { TitleYourProfileForm } from "../../Components/YourProfile/TitleYourProfileForm";
import { ErrorSubscriptionForm } from "./ErrorSubscriptionForm";

export function YourProfileScreen({ navigation, route }) {
  // const UserID = UserIdContext(UserIdContext);
  const { id } = route.params;
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  // console.log(id);

  const goTo = () => {
    console.log("Button " + "Next");
    // navigation.navigate("ChooseSportScreen", { id: id });
    if (name != "" && firstName != "" && country != "" && city != "") {
      let user = {
        name: name,
        firstName: firstName,
        Country: country,
        City: city,
      };
      axios
        .put(`http://10.0.2.2:8080/api/user/update/` + id, user)
        .then((res) => {
          let reposeReq = res.data;
          // setId(reposeReq._id);
          console.log(reposeReq);
          navigation.replace("ChooseSportScreen", { id: id });
        })
        .catch((error) => console.log(error));
      // navigation.navigate("ChooseSportScreen");
    } else if (
      name === "" ||
      firstName === "" ||
      country === "" ||
      city === ""
    ) {
      setError("Veillez remplire tous les champs");
      console.log("error");
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "#26242F",
      }}
      showsVerticalScrollIndicator={false}
    >
      <ButtonBackForm
        text="Back to Subscription Screen"
        textColor="#ffffff"
        fontWeight="bold"
        widthButton={Normalize(100)}
        heightButton={35}
        navigation={navigation}
        screen="SubscriptionScreen"
        size={17}
      />

      <TitleYourProfileForm title="YourProfile" />
      <View style={{ height: 30 }}></View>
      <ErrorSubscriptionForm messageError={error} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <FormInputGroup>
          <FormInput
            text="Name"
            onChangeText={(text) => setName(text)}
            value={name}
            borderColor="rgba(255, 255, 255, 0.1)"
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormInput
            text="First name"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
            borderColor="rgba(255, 255, 255, 0.1)"
          />
        </FormInputGroup>
        <FormInputGroup>
          <SelectlForm
            options={CountryList}
            onChangeSelect={(name) => setCountry(name)}
            text="Country"
          />
        </FormInputGroup>
        <FormInputGroup>
          {/* <SelectlForm options={CountryList} onChangeSelect={(country) => alert(country)} Text="Country" /> */}
          <SelectlForm
            options={CityList}
            onChangeSelect={(name) => setCity(name)}
            text="City"
          />
        </FormInputGroup>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: 60,
          alignItems: "center",
          marginTop: "8%",
          // backgroundColor: "red",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: hp("10%"),
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: Normalize(145),
              height: 40,
              backgroundColor: "#d6ff00",
              borderRadius: 13,
            }}
            onPress={goTo}
          >
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {"Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

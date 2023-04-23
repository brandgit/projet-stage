import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Normalize } from "../../Components/Global/Normalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { TitleInputForm } from "../../Components/Global/TitleInputForm";

import axios from "axios";

export function AboutYouScreen({ navigation, route }) {
  const [bio, setBio] = useState("");
  const { id } = route.params;
  // console.log(id);
  // console.log(bio);

  const goTo = () => {
    let Bio = {
      bio: bio,
    };
    axios
      .put(`http://10.0.2.2:8080/api/user/aboutYou/` + id, Bio)
      .then((res) => {
        navigation.replace("ConnectionScreen");
        let reposeReq = res.data;
        console.log(reposeReq);
      });
  };
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
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <ButtonBackForm
          text="Back choose your sport Screen"
          textColor="#ffffff"
          fontWeight="bold"
          widthButton={Normalize(100)}
          heightButton={35}
          navigation={navigation}
          screen="OpeningScreen"
          size={17}
        />
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TitleInputForm title="About you" />
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
      <Text
        style={{
          fontSize: 15,
          color: "white",
          textAlign: "center",
        }}
      >
        You can write a little description about you,
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "white",
          textAlign: "center",
        }}
      >
        your oassions, what you are looking for on this app
      </Text>

      <View
        style={{
          height: hp("40"),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
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
          onChangeText={(text) => setBio(text)}
          value={bio}
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
        {/* <ButtonForm
          text="Next"
          textColor="#000"
          bgColor="#d6ff00"
          fontWeight="bold"
          widthButton={Normalize(130)}
          heightButton={45}
          navigation={navigation}
          screen="TabNavigation"
          size={17}
          goTo={goTo}
        /> */}
      </View>
    </ScrollView>
  );
}

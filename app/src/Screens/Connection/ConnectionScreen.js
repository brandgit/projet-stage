import { View, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Normalize } from "../../Components/Global/Normalize";
import { TitleInputForm } from "../../Components/Global/TitleInputForm";
import FormInputGroup from "../../Components/Global/FormInputGroup";
import FormInput from "../../Components/Global/FormInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";
import { AddImageForm } from "../../Components/Global/AddImageForm";
const Logo = require("../../../assets//Images/Global/Logo.png");
const TEXT = "Veillez remplire tous les champs";
import axios from "axios";
import { ErrorSubscriptionForm } from "../Subscription/ErrorSubscriptionForm";
import { ButtonNextForm } from "../../Components/Global/ButtonNextForm";
import { ConnectionWithForm } from "../../Components/Global/ConnectionWithForm";
import { SocialMediaButtons } from "../../Components/Global/SocialMediaButtons";

import { useDispatch, useSelector } from "react-redux";
import { setStateUser } from "../../Feature/stateUser.slice";

export function ConnectionScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const fetchToken = async () => {
    await axios
      .get(`http://10.0.2.2:8080/jwtid`)
      .then((res) => {
        // setUid(res.data);
        const reposeReq = res.data;
        dispatch(setStateUser(reposeReq));

        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("No token");
      });
  };

  const goTo = () => {
    if (email === "" || password === "") {
      setError("Veillez remplire tous les champs");
      console.log(error);
    } else {
      let user = {
        email: email,
        password: password,
      };
      axios
        .post(`http://10.0.2.2:8080/api/user/login`, user)
        .then((res) => {
          let reposeReq = res.data;
          // console.log(reposeReq);
          fetchToken();
          console.log("Vous êtes connecté");
          // navigation.replace("TabNavigation");
          navigation.navigate("TabNavigation");
        })
        .catch((err) => {
          console.log(err);
          setError("Mail ou mot de passe incorrect");
          console.log(error);
        });
    }
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
      <ButtonBackForm
        text="Back to Opening Screen"
        textColor="#ffffff"
        fontWeight="bold"
        widthButton={Normalize(100)}
        heightButton={35}
        navigation={navigation}
        screen="OpeningScreen"
        size={17}
      />
      <AddImageForm LinkImage={Logo} />

      {/* Le titre de la page*/}
      <TitleInputForm title="Connection" />
      {/* Les zones de texte de notre screen*/}
      <View style={{ height: 30 }}></View>
      <ErrorSubscriptionForm messageError={error} />
      <FormInputGroup>
        <FormInput
          text="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </FormInputGroup>
      <FormInputGroup>
        <FormInput
          text="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </FormInputGroup>

      {/* Mot de passe oublié*/}
      <ButtonForm
        text="Forgotten password ?"
        widthButton="65%"
        textColor="white"
        heightButtonR={hp("6%")}
        size={13}
        navigation={navigation}
        screen="ForgetPasswordScreen"
      />

      <ButtonNextForm Navigation={goTo} />

      {/* Se connecter avec ses réseaux */}
      <ConnectionWithForm />
      <SocialMediaButtons />
    </ScrollView>
  );
}

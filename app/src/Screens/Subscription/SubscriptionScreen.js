import { View, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { Normalize } from "../../Components/Global/Normalize";
import FormInputGroup from "../../Components/Global/FormInputGroup";
import FormInput from "../../Components/Global/FormInput";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";
import { AddImageForm } from "../../Components/Global/AddImageForm";
import { TitleInputForm } from "../../Components/Global/TitleInputForm";
const Logo = require("../../../assets//Images/Global/Logo.png");
import axios from "axios";
import { ButtonNextForm } from "../../Components/Global/ButtonNextForm";
import { ButtonConnectionWithForm } from "../../Components/Subscription/ButtonConnectionWithForm";
import SocialsMediaComponentForm from "./SocialsMediaComponentForm";
import { ErrorSubscriptionForm } from "./ErrorSubscriptionForm";
import { CreateAcountForm } from "./CreateAcountForm";

export function SubscriptionScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const goTo = () => {
    // console.log("Button " + "Next");
    if (email === "" || password === "" || passwordConfirm === "") {
      setError("Veillez remplire tous les champs");
      console.log(error);
    } else if (password != passwordConfirm && email != "") {
      setError("Password incorrect");
      console.log(error);
    } else {
      let user = {
        email: email,
        password: password,
      };
      axios
        .post(`http://10.0.2.2:8080/api/user/subscription`, user)
        .then((res) => {
          let reposeReq = res.data;
          // console.log(reposeReq);
          if (reposeReq === "emailThatAlreadyExists") {
            setError("An account already exists with this email address");
            console.log(error);
          } else if (reposeReq === "incorrectEmailAddress") {
            setError("You entered an incorrect email address");
            console.log(error);
          } else {
            navigation.replace("YourProfileScreen", { id: reposeReq._id });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "#26242F",
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Bouton retour de l'application */}
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

      {/* Le Nom de l'application*/}
      <AddImageForm LinkImage={Logo} />
      {/* Le titre de la page*/}
      <TitleInputForm title="Subscription" />
      {/* Les zones de texte de notre screen*/}
      <View style={{ height: 30 }}></View>
      <ErrorSubscriptionForm messageError={error} />
      <FormInputGroup>
        <FormInput
          text="Email"
          value={email}
          borderColor="rgba(255, 255, 255, 0.1)"
          onChangeText={(text) => setEmail(text)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <FormInput
          text="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </FormInputGroup>
      <FormInputGroup>
        <FormInput
          text="Password confirmation"
          secureTextEntry={true}
          onChangeText={(text) => setPasswordConfirm(text)}
          value={passwordConfirm}
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </FormInputGroup>
      <CreateAcountForm />

      {/* Bouton next*/}
      <ButtonNextForm Navigation={goTo} />
      <ButtonConnectionWithForm />
      <SocialsMediaComponentForm />
    </ScrollView>
  );
}

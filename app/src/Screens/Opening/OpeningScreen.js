// Ce composant est validé

import { Text, View, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { Normalize } from "../../Components/Global/Normalize";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { AddImageForm } from "../../Components/Global/AddImageForm";
import { HeaderOpeningForm } from "../../Components/Opening/HeaderOpeningForm";
import { DescriptionOpeningForm } from "../../Components/Opening/DescriptionOpeningForm";
const Logo = require("../../../assets//Images/Global/Logo.png");
import { useDispatch, useSelector } from "react-redux";
import { setUsersData } from "../../Feature/users.slice";
import { setStateUser } from "../../Feature/stateUser.slice";
import axios from "axios";

export function OpeningScreen({ navigation }) {
  const dispatch = useDispatch();
  // const usersData = useSelector((state) => state.users.users);

  const goToHome = () => {
    console.log("Button Follow without account  ");
    dispatch(setStateUser("unknownUser"));
    navigation.navigate("TabNavigation");
  };

  const goToSubscription = () => {
    console.log("Button SubscriptionScreen  ");
    navigation.navigate("SubscriptionScreen");
  };

  const goToConnexion = () => {
    console.log("Button ConnectionScreen  ");
    navigation.navigate("ConnectionScreen");

    // useEffect(() => {
    //   const fetchToken = async () => {
    //   //   await axios
    //   //     .get(`http://10.0.2.2:8080/jwtid`)
    //   //     .then((res) => {
    //   //       dispatch(setStateUser(res.data));
    //   //       // setUid(res.data);
    //   //     })
    //   //     .catch((err) => console.log("No token"));
    //   // };
    //   fetchToken();
    // });
  };

  return (
    <ImageBackground
      source={require("../../../assets//Images/Opening/image-background.png")}
      style={{
        flex: 1,
      }}
    >
      <HeaderOpeningForm>
        <AddImageForm LinkImage={Logo} />
      </HeaderOpeningForm>
      <DescriptionOpeningForm />

      <View
        style={{
          flex: 1 / 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "84%",
          }}
        >
          <ButtonForm
            text="Connection"
            textColor="#FFF"
            bgColor="rgba(255, 255, 255, 0.3)"
            fontWeight="bold"
            widthButton={Normalize(130)}
            heightButton={40}
            navigation={navigation}
            screen="ConnectionScreen"
            size={13}
            goTo={goToConnexion}
          />

          <ButtonForm
            text="Subscription"
            textColor="#FFF"
            bgColor="rgba(255, 255, 255, 0.3)"
            fontWeight="bold"
            widthButton={Normalize(130)}
            heightButton={40}
            navigation={navigation}
            screen="SubscriptionScreen"
            size={13}
            goTo={goToSubscription}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2 / 9,
        }}
      >
        <ButtonForm
          text="Follow without account           &#x2794;"
          textColor="#FFF"
          bgColor="rgba(38, 36, 47, 0.8)"
          fontWeight="bold"
          widthButton={Normalize(270)}
          heightButton={40}
          navigation={navigation}
          screen="TabNavigation"
          size={13}
          goTo={goToHome}
        />
      </View>
    </ImageBackground>
  );
}

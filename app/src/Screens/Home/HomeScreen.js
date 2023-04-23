import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import axios from "axios";
import { TextInput } from "react-native";
import { UserIdContext } from "../../Components/Context/AppContext";
import React, { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HeaderPage } from "../../Components/Global/HeaderPage";
import { SuggestedFriend } from "../../Components/Home/SuggestedFriend";
import { Envents } from "../../Components/Home/Envents";
import { NextEvents } from "../../Components/Home/NextEvents";
import { LastArticles } from "../../Components/Home/LastArticles";
import { BlockArticles } from "../../Components/Home/BlockArticles";
import { Normalize } from "../../Components/Global/Normalize";
import HeaderForm from "../../Components/Global/HeaderForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ListEvents } from "../../Components/Global/ListEvents";
import { ListArticalesForm } from "../../Components/Home/ListArticalesForm";
import { HeaderHomeComponent } from "../../Components/Home/HeaderHomeComponent";
import { useDispatch, useSelector } from "react-redux";
import { setStateUser } from "../../Feature/stateUser.slice";

export function HomeScreen() {
  // const uid = useContext(UserIdContext);
  // console.log(usersData);
  const dispatch = useDispatch();
  const stateUserData = useSelector((state) => state.stateUser.stateUser);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios
  //       .get(`http://10.0.2.2:8080/jwtid`)
  //       .then((res) => {
  //         // setUid(res.data);
  //         const reposeReq = res.data;
  //         dispatch(setStateUser(reposeReq));

  //         // console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         console.log("No token");
  //       });
  //   };
  //   fetchToken();
  // }, []);

  // console.log("A user with ID : " + stateUserData + " is connected");
  console.log(stateUserData);

  return (
    <ScrollView>
      <View style={{ height: hp("60") }}>
        <HeaderForm>
          <HeaderHomeComponent />
        </HeaderForm>
      </View>

      <View style={{ height: hp("40") }}>
        <NextEvents />
        <ListEvents />
      </View>
      <View style={{ height: 700 }}>
        <LastArticles />
        <ListArticalesForm widthBArticles={300} heightBArcticles={500} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 70,
    backgroundColor: "yellow",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#FFF",
  },
  input: {
    padding: 10,
  },
  text: {},
  WrapperModalView: {
    // width: wp("70"),
    // width: Normalize(150),
    width: "80%",
    height: hp("40"),
    position: "absolute",
    top: Normalize(6),

    right: 0,
    zIndex: 1,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "rgba(38, 36, 47, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(214,255,0, 0.1)",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

{
  /* <ScrollView horizontal>
<BlockArticles widthBArticles={350} heightBArcticles={530} />
<BlockArticles widthBArticles={350} heightBArcticles={530} />
<BlockArticles widthBArticles={350} heightBArcticles={530} />
<BlockArticles widthBArticles={350} heightBArcticles={530} />
<BlockArticles widthBArticles={350} heightBArcticles={530} />
</ScrollView> */
}

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "../../Components/Global/Button";
import { Normalize } from "../../Components/Global/Normalize";
import { ButtonBack } from "../../Components/Global/ButtonBack";
import { TitleInput } from "../../Components/Global/TitleInput";
import { TitleFormH2 } from "../../Components/Global/TitleFormH2";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export const CreateEvent1 = ({ navigation }) => {
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
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            style={{ marginRight: 10 }}
            size={25}
            color="white"
            name={"calendar"}
          />
          <TitleFormH2 Title="Create event" color="white" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

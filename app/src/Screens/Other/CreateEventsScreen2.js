import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
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

export const CreateEventsScreen2 = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(0);
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
          text="Back to Create Events Screen 1"
          textColor="#ffffff"
          fontWeight="bold"
          widthButton={Normalize(100)}
          heightButton={35}
          navigation={navigation}
          screen="CreateEventsScreen1"
          size={17}
        />
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 100,
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

        <FormInputGroup>
          <FormInput
            text="Address"
            onChangeText={(text) => setAddress(text)}
            value={address}
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormInput
            text="Date"
            onChangeText={(text) => setDate(text)}
            value={date}
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormInput
            text="Hours"
            onChangeText={(text) => setHours(text)}
            value={hours}
          />
        </FormInputGroup>

        <Text
          style={{
            color: "white",
            fontSize: 14,
            marginLeft: "6%",
            marginTop: "10%",
          }}
        >
          Max number of participants
        </Text>
        <View
          style={{
            height: 100,
            width: "100%",
            justifyContent: "center",
            padding: "2%",
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              flexDirection: "row",
              width: "60%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (value > 0) {
                  setValue(value - 1);
                } else {
                  console.log("O");
                }
              }}
              style={{
                width: 50,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 15,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Ionicons name="window-minimize" color={"white"} size={20} />
            </TouchableOpacity>

            <View
              style={{
                width: 75,
                height: 45,
                borderRadius: 15,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>{value}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (value < 20) {
                  setValue(value + 1);
                }
              }}
              style={{
                width: 50,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 15,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Ionicons name="plus-thick" color={"white"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "center",
            width: "100%",
            height: 100,
            alignItems: "center",
            marginTop: "10%",
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
            screen="CreateEventsScreen3"
            size={17}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

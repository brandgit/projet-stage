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
import {
  SportsList,
  SportsList2,
  SportsList3,
  SportsList4,
  SportsList5,
} from "../../Components/Global/SportsList";

import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export const CreateEvent = ({ navigation }) => {
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
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>Whate sport ?</Text>
        </View>
        <View style={{ height: 30 }}></View>

        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              height: 112,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            {SportsList.map((Sport, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",

                  alignItems: "center",
                  width: "24%",
                  height: 110,
                }}
              >
                <TouchableOpacity
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    width: 70,
                    height: 70,
                    backgroundColor: "grey",
                    borderRadius: 15,
                  }}
                >
                  <Ionicons size={40} color="white" name={Sport.icon} />
                </TouchableOpacity>
                <Text style={{ marginTop: 10, color: "grey" }}>
                  {Sport.name}
                </Text>
              </View>
            ))}
          </View>
        </>

        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              height: 112,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            {SportsList2.map((Sport, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",

                  alignItems: "center",
                  width: "24%",
                  height: 110,
                }}
              >
                <TouchableOpacity
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 70,
                    height: 70,
                    backgroundColor: "grey",
                    borderRadius: 15,
                  }}
                >
                  <Ionicons size={40} color="white" name={Sport.icon} />
                </TouchableOpacity>
                <Text style={{ marginTop: 10, color: "grey" }}>
                  {Sport.name}
                </Text>
              </View>
            ))}
          </View>
        </>
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              height: 112,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            {SportsList3.map((Sport, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",

                  alignItems: "center",
                  width: "24%",
                  height: 110,
                }}
              >
                <TouchableOpacity
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 70,
                    height: 70,
                    backgroundColor: "grey",
                    borderRadius: 15,
                  }}
                >
                  <Ionicons size={40} color="white" name={Sport.icon} />
                </TouchableOpacity>
                <Text style={{ marginTop: 10, color: "grey" }}>
                  {Sport.name}
                </Text>
              </View>
            ))}
          </View>
        </>

        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              height: 112,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            {SportsList4.map((Sport, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "24%",
                  height: 110,
                }}
              >
                <TouchableOpacity
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 70,
                    height: 70,
                    backgroundColor: "grey",
                    borderRadius: 15,
                  }}
                >
                  <Ionicons size={40} color="white" name={Sport.icon} />
                </TouchableOpacity>
                <Text style={{ marginTop: 10, color: "grey" }}>
                  {Sport.name}
                </Text>
              </View>
            ))}
          </View>
        </>

        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 112,
              alignItems: "center",
              marginTop: 7,
              paddingLeft: 7,
            }}
          >
            {SportsList5.map((Sport, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",

                  alignItems: "center",
                  width: "25%",
                  height: 110,
                }}
              >
                <TouchableOpacity
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 70,
                    height: 70,
                    backgroundColor: "grey",
                    borderRadius: 15,
                  }}
                >
                  <Ionicons size={40} color="white" name={Sport.icon} />
                </TouchableOpacity>
                <Text style={{ marginTop: 10, color: "grey" }}>
                  {Sport.name}
                </Text>
              </View>
            ))}
          </View>
        </>

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
          <Button
            text="Next"
            textColor="#000"
            bgColor="#d6ff00"
            fontWeight="bold"
            widthButton={Normalize(130)}
            heightButton={45}
            navigation={navigation}
            screen="CreateEvent1"
            size={17}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

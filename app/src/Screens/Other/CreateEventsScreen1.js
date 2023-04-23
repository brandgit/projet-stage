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
import { ButtonChooseSportForm } from "../../Components/Global/ButtonChooseSportForm";

import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { ButtonForm } from "../../Components/Global/ButtonForm";

export const CreateEventsScreen1 = ({ navigation }) => {
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
          text="Back to Home Screen"
          textColor="#ffffff"
          fontWeight="bold"
          widthButton={Normalize(100)}
          heightButton={35}
          navigation={navigation}
          screen="HomeScreen"
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
          <TitleFormH2 color="white" Title="Create event" />
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
            <ButtonChooseSportForm
              // onPress={toggele}
              name="Runnning"
              icon="run"
            />
            <ButtonChooseSportForm name="Soccer" icon="soccer" />
            <ButtonChooseSportForm name="Tennis" icon="tennis" />
            <ButtonChooseSportForm name="Basketball" icon="basketball" />
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
            <ButtonChooseSportForm name="Five" icon="lifebuoy" />
            <ButtonChooseSportForm name="Fitness" icon="yoga" />
            <ButtonChooseSportForm name="Bodybuilding" icon="weight-lifter" />
            <ButtonChooseSportForm name="Hiking" icon="hiking" />
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
            <ButtonChooseSportForm name="Snooker" icon="dots-triangle" />
            <ButtonChooseSportForm name="Golf" icon="golf" />
            <ButtonChooseSportForm name="Cycling" icon="bike" />
            <ButtonChooseSportForm name="Boxing" icon="boxing-glove" />
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
            <ButtonChooseSportForm name="Dance" icon="human-female-dance" />
            <ButtonChooseSportForm name="Table tennis" icon="table-tennis" />
            <ButtonChooseSportForm name="Baseball" icon="baseball" />
            <ButtonChooseSportForm name="Ski" icon="ski" />
          </View>
        </>
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              textAlign: "center",
              width: "100%",
              height: 112,
              alignItems: "center",
              marginTop: 7,
              paddingLeft: 7,
            }}
          >
            <ButtonChooseSportForm name="Surf" icon="surfing" />
            <ButtonChooseSportForm name="Rugby" icon="rugby" />
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
          <ButtonForm
            text="Next"
            textColor="#000"
            bgColor="#d6ff00"
            fontWeight="bold"
            widthButton={Normalize(130)}
            heightButton={45}
            navigation={navigation}
            screen="CreateEventsScreen2"
            size={17}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

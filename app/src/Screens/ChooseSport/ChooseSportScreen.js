import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { Normalize } from "../../Components/Global/Normalize";
import { TitleInput } from "../../Components/Global/TitleInput";
import { TitleInputForm } from "../../Components/Global/TitleInputForm";
import { ButtonForm } from "../../Components/Global/ButtonForm";
import { ButtonBackForm } from "../../Components/Global/ButtonBackForm";
import { ButtonChooseSportForm } from "../../Components/Global/ButtonChooseSportForm";

export function ChooseSportScreen({ navigation, route }) {
  const { id } = route.params;
  // console.log(id);
  const goTo = () => {
    console.log("Button Follow without account  ");
    // dispatch(setStateUser("unknownUser"));
    navigation.navigate("AboutYouScreen", { id: id });
  };
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
          text="Back to Your Profile Screen "
          textColor="#ffffff"
          fontWeight="bold"
          widthButton={Normalize(100)}
          heightButton={35}
          navigation={navigation}
          // screen="YourProfileScreen"
          screen="OpeningScreen"
          size={17}
        />
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TitleInputForm title="Choose your" />
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TitleInput title="practiced sports" />
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
              height: 100,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <ButtonChooseSportForm name="Runnning" icon="run" id={id} />
            <ButtonChooseSportForm name="Soccer" icon="soccer" id={id} />
            <ButtonChooseSportForm name="Tennis" icon="tennis" id={id} />
            <ButtonChooseSportForm
              name="Basketball"
              icon="basketball"
              id={id}
            />
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
              height: 100,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <ButtonChooseSportForm name="Five" icon="lifebuoy" id={id} />
            <ButtonChooseSportForm name="Fitness" icon="yoga" id={id} />
            <ButtonChooseSportForm
              name="Bodybuilding"
              icon="weight-lifter"
              id={id}
            />
            <ButtonChooseSportForm name="Hiking" icon="hiking" id={id} />
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
              height: 100,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <ButtonChooseSportForm
              name="Snooker"
              icon="dots-triangle"
              id={id}
            />
            <ButtonChooseSportForm name="Golf" icon="golf" id={id} />
            <ButtonChooseSportForm name="Cycling" icon="bike" id={id} />
            <ButtonChooseSportForm name="Boxing" icon="boxing-glove" id={id} />
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
              height: 100,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <ButtonChooseSportForm
              name="Dance"
              icon="human-female-dance"
              id={id}
            />
            <ButtonChooseSportForm
              name="Table tennis"
              icon="table-tennis"
              id={id}
            />
            <ButtonChooseSportForm name="Baseball" icon="baseball" id={id} />
            <ButtonChooseSportForm name="Ski" icon="ski" id={id} />
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
              height: 100,
              alignItems: "center",
              paddingLeft: "2%",
              marginTop: 7,
            }}
          >
            <ButtonChooseSportForm name="Surf" icon="surfing" id={id} />
            <ButtonChooseSportForm name="Rugby" icon="rugby" id={id} />
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
            marginTop: "5%",
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
            screen="AboutYouScreen"
            size={17}
            id={id}
            goTo={goTo}
          />
        </View>
      </ScrollView>
    </View>
  );
}

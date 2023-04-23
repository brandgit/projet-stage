import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  FlatList,
  TouchableOpacity,
  Keyboard,
  Modal,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import HeaderForm from "../../Components/Global/HeaderForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IconForm } from "../../Components/Global/IconForm";
import { SearchComponent } from "../../Components/Global/SearchComponent";
import * as Location from "expo-location";
import { Normalize } from "../../Components/Global/Normalize";
import { useNavigation } from "@react-navigation/native";

export const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: hp("25"),
          backgroundColor: "#26242F",
          borderBottomRightRadius: 35,
          borderBottomLeftRadius: 35,
          paddingTop: 20,
        }}
      >
        {/* <View style={{ marginHorizontal: 20 }}> */}
        <SearchComponent />
        <View
          style={{
            height: hp("5"),
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate("CreateEventsScreen1");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 20,
              }}
            >
              <IconForm Name={"plus"} Color={"#d6ff00"} Size={30} />
              <Text style={{ fontSize: Normalize(15), color: "#d6ff00" }}>
                Create event
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.406,
          longitude: 123.3753,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}
        provider="google"
      >
        <Marker
          title="Test Title"
          description="Test descriptioin"
          pinColor="gold"
          coordinate={{ latitude: 13.406, longitude: 123.3753 }}
        ></Marker>
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

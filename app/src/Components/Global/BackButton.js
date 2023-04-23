import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'

export function BackButton(props) {

    const navigation = useNavigation()
    const goTo = () =>{
        console.log("Button Start")
        navigation.navigate("SubscriptionScreen")
      }

  return (
    <TouchableOpacity onPress={(goTo) } >
    <View style={{
              display: "flex",
              justifyContent: "center",
              alignItems:"flex-start",
            }}>
              <Ionicons name="arrow-back" borderRadius={20} color={"#FFFFFF"} size={40} style={{
                display: "flex",
                justifyContent: 'center',
                textAlign: "center",

              }} />
            </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export function AddButton(props) {

    const navigation = useNavigation()

    const goTo = () => {
        console.log("Button Start")
        navigation.navigate(props.screen)
    }
    return (
        <View style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: props.heightButtonR,
        }}>
            <TouchableOpacity
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: props.widthButton,
                    height: props.heightButton,
                    backgroundColor: props.bgColor,
                    borderRadius: 13,


                }}
                onPress={(goTo)}
            >
                < Ionicons size={40} color="white" name={props.Icon} />




            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});


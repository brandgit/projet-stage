import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native'


export function IconButton(props) {

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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: "11%",




                }}
                onPress={(goTo)}
            >
                < Ionicons size={40} color="white" name={props.Icon} />
                <Text
                    style={{
                        color: props.textColor,
                        fontWeight: props.fontWeight,
                        fontSize: props.size,
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center"

                    }}
                >
                    {props.text}
                </Text>




            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});

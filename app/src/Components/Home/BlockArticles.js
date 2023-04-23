import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export const BlockArticles = (props) => {
  return (
    <View
      style={{
        width: props.widthBArticles,
        height: props.heightBArcticles,
        backgroundColor: "white",
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "95%", height: "30%", borderRadius: 10 }}>
        <Image
          source={require("../../../assets//Images/Opening/Background.jpeg")}
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>
      <View
        style={{
          width: "95%",
          height: "13%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#333333" }}>
          Fitness
        </Text>
      </View>
      <View style={{ width: "95%", height: "40%" }}>
        <Text style={{ fontSize: 17, color: "grey" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliguip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </Text>
      </View>
      <View
        style={{
          width: "95%",
          height: "7%",
          borderTopWidth: 1,
          borderTopColor: "rbg(0, 0, 0, 0, 0.8)",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "45%",
            height: "100%",
            paddingTop: "3%",
          }}
        >
          <View>
            <TouchableOpacity>
              <Ionicons
                name="heart-outline"
                color={"#333333"}
                size={30}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Ionicons
                name="message-outline"
                color={"#333333"}
                size={30}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

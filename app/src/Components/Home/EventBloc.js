import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export const EventBloc = (props) => {
  return (
    <View
      style={{
        height: props.heightBloc,
        width: props.widthBloc,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "18%",
            height: "70%",
            borderRadius: 16,
            marginTop: 13,
            marginLeft: 10,
            backgroundColor: "#d6ff00",
          }}
        ></View>
        <View
          style={{
            height: "100%",
            width: "75%",
            display: "flex",
          }}
        >
          <View
            style={{
              height: "50%",
              width: "97%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 19, fontWeight: "bold", color: "#333333" }}
            >
              Football
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Ionicons name="people" color={"#333333"} size={20} style={{}} />
              <Text style={{ fontSize: 15, color: "grey", marginLeft: 6 }}>
                0/5
              </Text>
            </View>
          </View>
          <View
            style={{
              height: "50%",
              width: "65%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Ionicons
                name="calendar"
                color={"#333333"}
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={{ fontSize: 15, color: "grey" }}>09 mai</Text>
            </View>
            <Text style={{ fontSize: 15, color: "grey" }}>14:00-16:00</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 2, backgroundColor: "grey", width: "95%" }}
        ></View>
      </View>

      <View style={{ height: 80 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="location"
            color={"#333333"}
            size={30}
            style={{ marginLeft: 15 }}
          />
          <View
            style={{
              height: "100%",
              width: "85%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "80%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "grey" }}>
                2 Square Vendetta
              </Text>
              <Text style={{ fontSize: 15, color: "grey" }}>75015 Paris</Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "20%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
               <Ionicons
            name="arrow-forward"
            color={"#333333"}
            size={30}
            style={{ marginLeft: 15 }}
          />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

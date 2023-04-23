import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { ArticalesData } from "../Global/GlobalData";

export const ListArticalesForm = (props) => {
  const renderList = (item) => {
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
            source={item.image}
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
            {item.title}
          </Text>
        </View>

        <View style={{ width: "95%", height: "40%" }}>
          <Text style={{ fontSize: 17, color: "grey" }}>{item.articale}</Text>
        </View>
        <View
          style={{
            width: "95%",
            height: "7%",
            borderTopWidth: 1,
            borderTopColor: "rgba(0, 0, 0, 0.1)",
            // backgroundColor: "red",
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
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "red",
                width: "40%",
                height: "90%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="heart-outline"
                  color={"#333333"}
                  size={25}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, color: "grey" }}>{item.like}</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "yellow",
                width: "40%",
                height: "90%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="message-outline"
                  color={"#333333"}
                  size={25}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 17, color: "grey", alignSelf: "center" }}
              >
                {item.numberComments}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={ArticalesData}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item.id}
        //    onRefresh = {() => fetchData()}
        //    refreshing ={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

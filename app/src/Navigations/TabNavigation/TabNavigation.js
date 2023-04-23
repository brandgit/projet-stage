import { StyleSheet, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../Screens/Home/HomeScreen";
import { MapScreen } from "../../Screens/Map/MapScreen";
import { FriendsScreen } from "../../Screens/Friends/FriendsScreen";
import { ProfileScreen } from "../../Screens/Profile/ProfileScreen";
import { MessagesGroupsScreen } from "../../Screens/Messages/MessagesGroupsScreen";
import { TransitionPresets } from "@react-navigation/stack";
import { HomeNavigation } from "../HomeNavigation/HomeNavigation";
export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeNavigation") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "MessagesGroupsScreen") {
            iconName = focused ? "message-outline" : "message-outline";
          } else if (route.name === "FriendsScreen") {
            iconName = focused
              ? "account-multiple-outline"
              : "account-multiple-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "account-outline" : "account-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#d6ff00",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#26242F",
          height: 75,
          borderTopLeftRadius: 27,
          borderTopRightRadius: 27,
          position: "absolute",
          bottom: 0,
          // top: "93%",

          left: 0,
          rigth: 0,
          elevation: 0,
        },
        headerShown: false,
        tabBarHideOnKeyboard: false,
      })}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Tab.Screen
        name="MessagesGroupsScreen"
        component={MessagesGroupsScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.View}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: focused ? "#d6ff00" : "grey",
                  width: 62,
                  height: 62,
                  borderRadius: 50,
                }}
              >
                <Ionicons
                  name="map-marker-outline"
                  borderRadius={20}
                  color={"#333333"}
                  size={40}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    paddingTop: 5,
                    backgroundColor: focused ? "#d6ff00" : "grey",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  View: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26242F",
    width: 77,
    height: 77,
    borderRadius: 50,
    top: -10,
  },
});

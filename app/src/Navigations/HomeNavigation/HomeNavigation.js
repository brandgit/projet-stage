import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { UserScreen } from "../../Screens/Other/UserScreen";
import { HomeScreen } from "../../Screens/Home/HomeScreen";
import { NotificationsScreen } from "../../Screens/Profile/NotificationsScreen";
import { ProfileSportif } from "../../Screens/Other/ProfileSportif";

export const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeNotification"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HomeProfileSportif"
        component={ProfileSportif}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

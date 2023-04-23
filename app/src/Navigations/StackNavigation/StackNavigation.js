import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { OpeningScreen } from "../../Screens/Opening/OpeningScreen";
import { ConnectionScreen } from "../../Screens/Connection/ConnectionScreen";
import { SubscriptionScreen } from "../../Screens/Subscription/SubscriptionScreen";
import { AboutYouScreen } from "../../Screens/AboutYou/AboutYouScreen";
import { ChooseSportScreen } from "../../Screens/ChooseSport/ChooseSportScreen";
import { YourProfileScreen } from "../../Screens/Subscription/YourProfileScreen";
import { TabNavigation } from "../../Navigations/TabNavigation/TabNavigation";
import { EditYourProfileScreen1 } from "../../Screens/Profile/EditYourProfileScreen1";
import { YourPracticedSportsScreen } from "../../Screens/Profile/YourPracticedSportsScreen";
import { NotificationsScreen } from "../../Screens/Profile/NotificationsScreen";
import { CreateEvent } from "../../Screens/Map/CreateEvent";
// import { CreateEventsScreen1 } from ".../../Screens/Home/CreateEventsScreen1";
import { CreateEventsScreen2 } from "../../Screens/Other/CreateEventsScreen2";
import { CreateEventsScreen1 } from "../../Screens/Other/CreateEventsScreen1";
import { CreateEventsScreen3 } from "../../Screens/Other/CreateEventsScreen3";
import { CongratulationsSreen } from "../../Screens/Other/CongratulationsSreen";
import { Congratulations1Sreen } from "../../Screens/Other/Congratulations1Screen";
import { CreateGroupScreen } from "../../Screens/Messages/CreateGroupScreen";
import { HomeScreen } from "../../Screens/Home/HomeScreen";
import { CreateGroupScreen1 } from "../../Screens/Messages/CreateGroupScreen1";
import { HomeNavigation } from "../HomeNavigation/HomeNavigation";
import { CreateAcountForm } from "../../Screens/Subscription/CreateAcountForm";
export const StackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OpeningScreen"
          component={OpeningScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SubscriptionScreen"
          component={SubscriptionScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ConnectionScreen"
          component={ConnectionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="YourProfileScreen"
          component={YourProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChooseSportScreen"
          component={ChooseSportScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AboutYouScreen"
          component={AboutYouScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="YourPracticedSportsScreen"
          component={YourPracticedSportsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditYourProfileScreen1"
          component={EditYourProfileScreen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateEventsScreen1"
          component={CreateEventsScreen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateEventsScreen2"
          component={CreateEventsScreen2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateEventsScreen3"
          component={CreateEventsScreen3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CongratulationsSreen"
          component={CongratulationsSreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Congratulations1Sreen"
          component={Congratulations1Sreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CreateGroupScreen1"
          component={CreateGroupScreen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateGroupScreen"
          component={CreateGroupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateAcountForm"
          component={CreateAcountForm}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

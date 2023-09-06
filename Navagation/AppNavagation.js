import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import GoalSettingScreen from "../screens/GoalSettingScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import DetailedWorkoutScreen from "../screens/DetailedWorkoutScreen";
import YogaPlayScreen from "../screens/YogaPlayScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkoutScreen"
          component={WorkoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="YogaPlayScreen"
          component={YogaPlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedWorkoutScreen"
          component={DetailedWorkoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SingUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GoalSettingScreen"
          component={GoalSettingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

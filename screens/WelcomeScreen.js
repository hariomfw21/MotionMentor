import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { retrieveToken } from "../components/AsyncStorage";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    const getToken = async () => {
      const token = await retrieveToken();
      setTimeout(() => {
        if (token) {
          navigation.navigate("HomeScreen");
        } else {
          navigation.navigate("LoginScreen");
        }
      }, 1000);
    };

    getToken();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-purple-500">
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-xl text-center">
          Welcome to fitness app
        </Text>
      </View>
    </SafeAreaView>
  );
}

import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { storeToken } from "../components/AsyncStorage";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Storing token
  const storeToken = async (token, user) => {
    try {
      await AsyncStorage.setItem("token", token); // to Set Token
      await AsyncStorage.setItem("userInfo", JSON.stringify(user)); // For user information
    } catch (error) {
      console.error("Error storing token:", error);
    }
  };

  const handlelogin = () => {
    if (email == "" || password == "") {
      alert("Please fill all the fields");
    } else {
      const form = {
        email,
        password,
      };
      console.log(form);

      fetch("http://10.0.2.2:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data.user);
            token = data.token;
            user = data.user;
            storeToken(token, user);
            navigation.navigate("HomeScreen");
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <SafeAreaView className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <View className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <Image
          className="mx-auto h-10 w-auto"
          source={{ uri: require('../assets/logo.jpg') }}
          alt="Your Company"
        /> */}
        <Text className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </Text>
      </View>

      <View className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <View className="space-y-4" action="#" method="POST">
          <Text className="block text-sm font-medium leading-6">
            Email address
          </Text>
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-blue-700 focus:border-2">
            <TextInput
              onChangeText={(text) => {
                setEmail(text);
              }}
              placeholder="Email address"
              autoCompleteType="email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View>
          <Text className="block text-sm font-medium leading-6 text-gray-900 pb-2">
            Password
          </Text>
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-blue-700 focus:border-2">
            <TextInput
              onChangeText={(text) => {
                setPassword(text);
              }}
              placeholder="Password"
              secureTextEntry
              autoCompleteType="password"
            />
          </View>
          <TouchableOpacity>
            <Text className="text-blue-500 ">Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handlelogin}
          className="bg-blue-700 p-3 rounded-md mt-3 focus:bg-white"
        >
          <Text className="text-center text-white font-bold text-x focus:text-black">
            Sign in
          </Text>
        </TouchableOpacity>

        <Text className="mt-2">
          Dont Have a Account ?{" "}
          <Text
            className="text-blue-900 font-bold"
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

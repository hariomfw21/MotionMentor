import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    const formData = {
      name: name,
      age: age,
      gender: gender,
      email: email,
      password: password,
    };

    fetch("http://10.0.2.2:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          Create an account
        </Text>
      </View>

      <View className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <View className="space-y-4">
          <Text className="block text-sm font-medium leading-6">Name</Text>
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-blue-700 focus:border-2">
            <TextInput
              onChangeText={(text) => setName(text)}
              placeholder="Name"
              autoCompleteType="text"
              autoCapitalize="none"
            />
          </View>
        </View>
        <View className="space-y-4" action="#" method="POST">
          <Text className="block text-sm font-medium leading-6">Age</Text>
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-blue-700 focus:border-2">
            <TextInput
              onChangeText={(text) => setAge(text)}
              placeholder="Age"
              autoCompleteType="number"
              autoCapitalize="none"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View className="space-y-4" action="#" method="POST">
          <Text className="block text-sm font-medium leading-6">Gender</Text>
          <View className="border mb-2 rounded-md text-gray-950dsf focus:border-blue-700 focus:border-2">
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
        </View>
        <View className="space-y-4" action="#" method="POST">
          <Text className="block text-sm font-medium leading-6">
            Email address
          </Text>
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-blue-700 focus:border-2">
            <TextInput
              onChangeText={(text) => setEmail(text)}
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
              onChangeText={(text) => setPassword(text)}
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
          onPress={handleSubmit}
          className="bg-blue-700 p-3 rounded-md mt-3 focus:bg-white"
        >
          <Text className="text-center text-white font-bold text-x focus:text-black">
            create account
          </Text>
        </TouchableOpacity>

        <Text className="mt-2">
          Already have a account ?{" "}
          <Text
            className="text-blue-900 font-bold "
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

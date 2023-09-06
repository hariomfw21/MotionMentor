import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const GoalSettingScreen = () => {
  const [goal, setGoal] = useState("");
  const [goalplan, setGoalPlan] = useState("");
  const goalTypes = ["Weight Loss", "Muscle Gain", "Cardio Fitness"];
  const navigator = useNavigation();

  const handleSubmit = () => {
    alert("Your data has been submitted");
    navigator.navigate("HomeScreen");
  }
  return (
    <SafeAreaView className="flex-1 bg-purple-500">
      <View>
        <Text className="text-white text-2xl text-center mt-3 font-bold">
          Enter Your Workout Goal
        </Text>
      </View>
      <View style={{ padding: 16 }}>
        <Text
          className="text-white font-bold text-xl mt-2 ml-2"
          style={{ marginBottom: 8 }}
        >
          Plan Name
        </Text>
        <TextInput
          className="rounded-2xl bg-white p-3 border-cyan-50 "
          //   onChange={(text) => setName(text)}
          placeholder="Enter Your Plan Name Here"
        />

        <Text className="text-white font-bold text-xl mt-2 ml-2 mb-2">
          Goal
        </Text>
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Picker
            style={{
              borderWidth: 1,
              borderColor: "#CBD5E0",
              backgroundColor: "white",
              padding: 10,
            }}
            selectedValue={goalplan}
            onValueChange={(itemValue, itemIndex) => setGoalPlan(itemValue)}
          >
            {goalTypes.map((type, index) => (
              <Picker.Item key={index} label={type} value={type} />
            ))}
          </Picker>
        </View>
        <Text
          className="text-white font-bold text-xl mt-2 ml-2"
          style={{ marginBottom: 8 }}
        >
          Duration
        </Text>
        <TextInput
          keyboardType="numeric"
          className="rounded-2xl bg-white p-3 border-cyan-50 "
          //   onChange={(text) => setName(text)}
          placeholder="Enter Your Plan Name Here"
        />
        <Text
          className="text-white font-bold text-xl mt-2 ml-2"
          style={{ marginBottom: 8 }}
        >
          Description
        </Text>

        <TextInput
          keyboardType="numeric"
          className="rounded-2xl bg-white p-6 border-cyan-50 "
          //   onChange={(text) => setName(text)}
          placeholder="write about your plan"
        />

        <TouchableOpacity
          className="rounded-2xl bg-white p-3 border-cyan-50 mt-5 "
          onPress={handleSubmit}
        >
          <Text className="text-center font-bold text-purple-500">Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GoalSettingScreen;

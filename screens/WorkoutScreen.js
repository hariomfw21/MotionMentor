import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import Workout from "../components/workout";
import CustomNavBar from "../components/CustomNavBar";

const WorkoutScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("HomeScreen");

  const [workoutName, setWorkoutName] = useState("");
  const [exerciseCount, setExerciseCount] = useState("");
  const [duration, setDuration] = useState("");

  const createCustomWorkout = () => {
    // You can handle the logic to create a custom workout here.
    // For now, let's just log the values.
    console.log("Workout Name:", workoutName);
    console.log("Exercise Count:", exerciseCount);
    console.log("Duration:", duration);
  };

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="w-90 ml-5 mr-5 p-5">
        <Text className="font-bold text-2xl mt-3">Workouts</Text>

        {/* Diplaying all the workout  */}

        <Workout />

        {/* Diplaying all the workout  */}

        <View className="flex flex-row justify-between items-center mt-6">
          <Text className="font-bold text-2xl">Create Workouts</Text>
          <FontAwesomeIcon icon={faPlus} size={20} />
        </View>
        <View className="space-y-4 mt-3">
          {/* <Text className="block text-sm font-medium leading-6">Name</Text> */}
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-purple-600 focus:border-2">
            <TextInput
              onChangeText={(text) => setWorkoutName(text)}
              placeholder="Workout Name"
              autoCompleteType="text"
              autoCapitalize="none"
            />
          </View>
        </View>
        <View className="space-y-4 mt-3">
          {/* <Text className="block text-sm font-medium leading-6">Name</Text> */}
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-purple-600 focus:border-2">
            <TextInput
              onChangeText={(text) => setExerciseCount(text)}
              placeholder="Exercise Count"
              autoCompleteType="text"
              autoCapitalize="none"
            />
          </View>
        </View>
        <View className="space-y-4 mt-3">
          {/* <Text className="block text-sm font-medium leading-6">Name</Text> */}
          <View className=" py-1.5 border p-2 mb-2 rounded-md text-gray-950dsf focus:border-purple-600 focus:border-2">
            <TextInput
              onChangeText={(text) => setWorkoutName(text)}
              placeholder="Duration ( in minutes )"
              autoCompleteType="text"
              autoCapitalize="none"
            />
          </View>
        </View>
        <TouchableOpacity
          className="text-center items-center bg-purple-600 p-3 rounded-full mt-4"
          onPress={createCustomWorkout}
        >
          <Text className="text-white">Create Custom Workout</Text>
        </TouchableOpacity>
      </View>
      <View className="absolute bottom-4 w-full">
        <CustomNavBar
          activeTab={activeTab}
          onChangeTab={handleChangeTab}
          style={{
            position: "fixed",
            bottom: 0, // Adjust this value to set the distance from the bottom of the screen
            left: 0, // You can adjust this if you want it fixed to the left
            right: 0, // You can adjust this if you want it fixed to the right
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WorkoutScreen;

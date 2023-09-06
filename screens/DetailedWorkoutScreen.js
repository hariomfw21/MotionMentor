import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faClock,
  faPerson,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import Exercises from "../components/exercises";

const DetailedWorkoutScreen = () => {
  const navigation = useNavigation();
  const [receivedData, setReceivedData] = useState([]);
  const [totaltime, setTotalTime] = useState(0);

  const handleDataFromChild = (data) => {
    setReceivedData(data);
    const totalTime = data.reduce((acc, exercise) => {
      return acc + exercise.duration;
    }, 0);

    setTotalTime(totalTime);
  };

  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="absolute top-12 left-5 z-10"
      >
        <FontAwesomeIcon icon={faAngleLeft} size={32} color="#6600CC" />
      </TouchableOpacity>
      <View className="items-center justify-center">
        <Image
          className="w-96 h-80 rounded-2xl md:w-3/4 md:h-96"
          source={require("../assets/Yoga/image2.jpg")}
        />
      </View>
      <View className="bg-slate-100 border border-gray-200 p-4 rounded-t-3xl">
        <Text className="font-semibold text-xl mb-3">Yoga Workout</Text>
        <View className="flex flex-row space-x-3">
          <TouchableOpacity className="bg-blue-100 rounded-full p-2 w-28 flex flex-row items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faClock} color="#6600CC" />
            <Text className="text-violet-900">{totaltime}:00</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-100 rounded-full p-2 w-36 flex flex-row items-center justify-center space-x-2 text-blue-400">
            <FontAwesomeIcon icon={faPersonWalking} color="#6600CC" />
            <Text className="text-violet-900">
              {receivedData.length} exercises
            </Text>
          </TouchableOpacity>
        </View>

        {/* Display versios pose */}

        <Exercises onDataReceived={handleDataFromChild} />

        {/* Display versios pose */}
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YogaPlayScreen");
        }}
        className="w-full p-3 text-center items-center bg-purple-600 rounded-full absolute bottom-4"
      >
        <Text className="font-bold text-white">Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailedWorkoutScreen;

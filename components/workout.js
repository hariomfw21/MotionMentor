import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

const Workout = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://10.0.2.2:3000/workouts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        // console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      {data
        ? data.map((item, index) => (
            <TouchableOpacity
              key={index} // Add a unique key to each element in the map function
              onPress={() =>
                navigation.navigate("DetailedWorkoutScreen", {
                  workoutId: item._id,
                })
              }
              className="flex flex-row bg-slate-100 border border-gray-200 justify-between p-4 rounded-lg mt-4"
            >
              <View>
                <Text className="font-semibold text-base mb-1">
                  {item.name}
                </Text>
                <Text className="text-slate-500 mb-1">
                  {item.noOfExercises} Exercises
                </Text>
                <Text className="text-slate-500 mb-1">
                  {item.totalTime} Min
                </Text>
              </View>
              <View className="bg-slate-400 rounded p-4">
                <Image
                  className="h-10 w-20"
                  source={{
                    uri: "https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2b9a.png",
                  }}
                />
              </View>
            </TouchableOpacity>
          ))
        : null}
    </>
  );
};

export default Workout;

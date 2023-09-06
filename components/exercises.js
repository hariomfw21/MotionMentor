import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { value } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import { useNavigation } from "@react-navigation/native";

const Exercises = ({ onDataReceived }) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { workoutId } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://10.0.2.2:3000/workouts/exercises/${workoutId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const fetchedData = await response.json();
        setData(fetchedData);
        onDataReceived(fetchedData);  // callback function for setting the data information
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
        ? data.map((item, value) => (
            <TouchableOpacity
              className="flex flex-row bg-white rounded-md mt-4 items-center justify-between p-2"
              key={value}
              onPress={()=> {
                navigation.navigate('YogaPlayScreen',{exerciseId:item._id})
              }}
            >
              <View>
                <Image
                  className="h-20 w-16"
                  source={require("../assets/Yoga/Image1.jpg")}
                />
              </View>
              <View className="text-start w-6/12">
                <Text className="font-bold text-xl">{item.name}</Text>
                <Text className="text-slate-400 mt-1">
                  {item.duration} minutes
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  size={30}
                  color="#6600CC"
                />
              </View>
            </TouchableOpacity>
          ))
        : null}
    </>
  );
};

export default Exercises;

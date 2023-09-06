import { faFire, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomNavBar from "../components/CustomNavBar";
import { retrieveUserInfo } from "../components/AsyncStorage";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("HomeScreen");
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    setActiveTab(route.name);
    const fetchUserInfo = async () => {
      try {
        const userInfoString = await retrieveUserInfo();
        if (userInfoString) {
          const parsedUserInfo = JSON.parse(userInfoString);
          setUserInfo(parsedUserInfo); // Set userInfo state
        } else {
          console.warn("User info not found.");
        }
      } catch (error) {
        console.error("Error parsing user info:", error);
      }
    };
    fetchUserInfo();
  }, [route]);

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const data = [
    {
      id: "1",
      header: "Cardio",
      NoOfExe: 10,
      NoOfMin: 50,
      Image: require("../assets/cardio.png"),
    },
    {
      id: "2",
      header: "Arms",
      NoOfExe: 6,
      NoOfMin: 35,
      Image: require("../assets/musul.png"),
    },
    {
      id: "3",
      header: "Mucules",
      NoOfExe: 5,
      NoOfMin: 15,
      Image: require("../assets/Yoga.png"),
    },
  ];

  const backgroundColors = [
    "bg-yellow-500",
    "bg-emerald-500",
    "bg-fuchsia-500",
  ];

  const renderItem = ({ item, index }) => (
    <View
      className={`h-36 w-70 mr-3 rounded-md p-3 ${backgroundColors[index]}`}
    >
      <View className="flex flex-row justify-between overflow-hidden">
        <View className="p-3">
          <Text className="text-white text-4xl font-normal">{item.header}</Text>
          <Text className="text-white text-x font-bold">
            {item.NoOfExe} <Text>Exercises</Text>
          </Text>
          <Text className="text-white text-x font-bold ">
            {item.NoOfMin} <Text>Minutes</Text>
          </Text>
        </View>
        {/* image container */}
        <View>
          <Image
            source={item.Image}
            style={{ width: 130, height: 120, resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className='flex-1'>
      <View className="w-90 ml-5 mr-5 p-5">
        <TouchableOpacity
          className="flex flex-row justify-around mt-3 items-center space-x-9"
          onPress={() => {
            navigation.navigate("UserProfileScreen");
          }}
        >
          <View>
            {userInfo && (
              <Text className="text-2xl font-bold">Hi, {userInfo.name}</Text>
            )}
            <Text className="text-l font-bold">Let's check your activity</Text>
          </View>
          <View className="p-1 rounded-full border border-blue-200 bg-blue-200">
            <Image
              className="w-14 h-14 rounded-full p-2 border bg-blue-200"
              source={require("../assets/Yoga/WarrierPose/imageavtar.jpg")}
            />
          </View>
        </TouchableOpacity>
        {/* workout details */}
        <View className="flex flex-row mt-10 justify-between">
          <View className="bg-slate-100 border border-gray-200 p-7 rounded-3xl items-center justify-center">
            <Text className="text-center text-x -mt-4">💪 Finished</Text>
            <Text className="text-center text-3xl mt-4 font-extrabold pb-2">
              12
            </Text>
            <Text className="text-slate-500 text-center font-normal">
              Completed
            </Text>
            <Text className="text-slate-500 text-center font-normal">
              Workouts
            </Text>
          </View>
          {/* right container */}
          <View className="space-y-4">
            <View className="bg-slate-100 border border-gray-200 p-4 rounded-lg">
              <Text className="mb-3 font-bold text-xl">
                🐣 <Text>In progress</Text>{" "}
              </Text>
              <Text className="font-bold text-xl ml-2">
                2{" "}
                <Text className="font-normal text-sm text-slate-500">
                  {" "}
                  Workouts
                </Text>
              </Text>
            </View>
            <View className="bg-slate-100 border border-gray-200 p-4  rounded-lg">
              <Text className="mb-3 font-bold text-xl">
                🕖 <Text>Time Spent</Text>{" "}
              </Text>
              <Text className="font-bold text-xl ml-2">
                62{" "}
                <Text className="font-normal text-sm text-slate-500">
                  {" "}
                  Minutes
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* Discover New Workout */}
        <View className="mt-5">
          <Text className="font-bold text-lg">Discover new workouts</Text>
          <View className="mt-5">
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        {/* Keep the Progrss */}
        {/* <View className="flex flex-row mt-7 bg-slate-100 border border-b-gray-200 border-l-gray-200  border-r-gray-200 h-16 border-t-gray-100 items-center p-3 rounded-md">
          <View>
            <Text className="text-2xl mr-3">🎉</Text>
          </View>
          <View>
            <Text className="text-xl">Keep the progress!</Text>
            <Text>You are more successfull than 88% users</Text>
          </View>
        </View> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("GoalSettingScreen")}
          className="flex flex-row mt-7 bg-slate-100 border border-b-gray-200 border-l-gray-200  border-r-gray-200 h-16 border-t-gray-100 items-center p-3 rounded-md"
        >
          <View>
            <Text className="text-2xl mr-3">🎉</Text>
          </View>
          <View>
            <Text className="text-xl">Set your fitness goal !</Text>
            <Text>You are more successfull than 88% users</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Navagation Content */}
      <View className="mt-16 absolute bottom-4 w-full">
        <CustomNavBar
          activeTab={activeTab}
          onChangeTab={handleChangeTab}
        />
      </View>
    </SafeAreaView>
  );
}

import {
  View,
  Text,
  TextInput,
  Select,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight, faPen, faT } from "@fortawesome/free-solid-svg-icons";
import CustomNavBar from "../components/CustomNavBar";
import {
  retrieveUserInfo,
  retrieveToken,
  clearToken,
} from "../components/AsyncStorage";
import LoginScreen from "./LoginScreen";

const UserProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [activeTab, setActiveTab] = useState("UserProfileScreen");
  const navigation = useNavigation();

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  const navigator = useNavigation();

  const handleLogout = async () => {
    try {
      await clearToken(); // Clear user info from AsyncStorage
      // await retrieveToken(); // Clear the token if needed (optional)
      navigation.replace("LoginScreen"); // Navigate to the login screen
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
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
  }, []);
  return (
    <SafeAreaView className='flex-1'>
      <View className="flex flex-row justify-between mt-6">
        <View>{/* text */}</View>
        <View>
          <View className="p-3 rounded-full border border-blue-200 bg-blue-200">
            <Image
              className="w-32 h-32 rounded-full border bg-blue-200"
              source={require("../assets/Yoga/WarrierPose/imageavtar.jpg")}
            />
          </View>
          <View>
            {userInfo && (
              <Text className="text-xl text-center font-bold mt-5">
                {userInfo.name}
              </Text>
            )}
          </View>
        </View>
        <View className="h-10 rounded-full bg-blue-200 p-3 -ml-20 mr-4 mt-3">
          <FontAwesomeIcon icon={faPen} size={18} color="blue" />
        </View>
      </View>
      {/* Input box Start form here */}
      <View className="mt-8">
        <TouchableOpacity className="p-3 bg-slate-200 w-90 ml-5 mr-5 rounded-lg mt-3 flex flex-row justify-between">
          <Text className="font-bold text-gray-800">Calender</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-slate-200 w-90 ml-5 mr-5 rounded-lg mt-4 flex flex-row justify-between">
          <Text className="font-bold text-gray-800">Reminder</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-slate-200 w-90 ml-5 mr-5 rounded-lg mt-4 flex flex-row justify-between">
          <Text className="font-bold text-gray-800">Rate us on App store</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-slate-200 w-90 ml-5 mr-5 rounded-lg mt-4 flex flex-row justify-between">
          <Text className="font-bold text-gray-800">Term & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          className="p-3 bg-slate-200 w-90 ml-5 mr-5 rounded-lg mt-4 flex flex-row justify-between"
        >
          <Text className="font-bold text-gray-800">Sign out</Text>
        </TouchableOpacity>
      </View>

      {/* Social media */}
      <View className="mt-8 ">
        <Text className="text-center text-x font-bold">
          Join us on Social media
        </Text>
        <View className="flex flex-row justify-center space-x-4 mt-5">
          <FontAwesomeIcon icon={faFacebook} size={34} color="blue" />
          <FontAwesomeIcon icon={faInstagram} size={34} color="blue" />
          <FontAwesomeIcon icon={faTwitter} size={34} color="blue" />
        </View>
      </View>

      {/* Navagation Content */}
      <View className="mt-16 w-full absolute bottom-3">
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

export default UserProfileScreen;

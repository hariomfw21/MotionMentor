import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faFire, faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function CustomNavBar({ activeTab, onChangeTab }) {
  const navigation = useNavigation();
  return (
    <View className="flex flex-row justify-between  items-center pl-7 pr-7 pt-3">
      <View className="items-center">
        <TouchableOpacity
          onPress={() => {
            onChangeTab("HomeScreen");
            navigation.navigate("HomeScreen");
          }}
          className="items-center"
        >
          <FontAwesomeIcon
            icon={faHome}
            size={25}
            color={activeTab === "HomeScreen" ? "blue" : "gray"}
          />
          <Text
            className={`text-center text-sm ${
              activeTab === "HomeScreen" ? "text-blue-400" : "text-slate-400"
            }`}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <TouchableOpacity
          onPress={() => {
            onChangeTab("WorkoutScreen");
            navigation.navigate("WorkoutScreen");
          }}
          className="items-center"
        >
          <FontAwesomeIcon
            icon={faFire}
            size={25}
            color={activeTab === "WorkoutScreen" ? "blue" : "gray"}
          />
          <Text
            className={`text-center text-sm ${
              activeTab === "WorkoutScreen" ? "text-blue-400" : "text-slate-400"
            }`}
          >
            Workouts
          </Text>
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <TouchableOpacity
          onPress={() => {
            onChangeTab("UserProfileScreen");
            navigation.navigate("UserProfileScreen");
          }}
          className="items-center"
        >
          <FontAwesomeIcon
            icon={faGear}
            size={25}
            color={activeTab === "UserProfileScreen" ? "blue" : "gray"}
          />
          <Text
            className={`text-center text-sm ${
              activeTab === "UserProfileScreen"
                ? "text-blue-400"
                : "text-slate-400"
            }`}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

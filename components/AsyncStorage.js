import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import * as Speech from "expo-speech";

const retrieveToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

const clearToken = async () => {
  try {
    await AsyncStorage.removeItem("token"); // Replace 'userInfo' with your storage key for user information
    console.log("User information cleared.");
  } catch (error) {
    console.error("Error clearing user information:", error);
  }
};

const retrieveUserInfo = async () => {
  try {
    const user = await AsyncStorage.getItem("userInfo");
    return user;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

const VoiceListScreen = async () => {
  useEffect(() => {
    async function logAvailableVoices() {
      const availableVoices = await Speech.getAvailableVoicesAsync();
      console.log(availableVoices);
    }

    logAvailableVoices();
  }, []);

  return null;
};

module.exports = {
  retrieveToken,
  retrieveUserInfo,
  clearToken,
  VoiceListScreen,
};

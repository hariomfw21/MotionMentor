import React from "react";
import { View, Button } from "react-native";
import * as Speech from "expo-speech";

const speakInIndianAccent = ({ text }) => {
  const thingToSay = text;
  options = {
    voice: "hi-in-x-cfn#male_3-local",
  };
  Speech.speak(thingToSay, options);
};

export default speakInIndianAccent;

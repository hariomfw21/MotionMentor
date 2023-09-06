import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SliderForYogaPlayScreen from "../components/SliderForYogaPlayScreen";
import { VoiceListScreen } from "../components/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import speakInIndianAccent from "../components/Speech";
import { useRoute } from "@react-navigation/native";
import Steps from "../components/steps";

const YogaPlayScreen = () => {
  const route = useRoute();
  const { exerciseId } = route.params;
  const navigation = useNavigation();

  const [steps, setSteps] = useState(null);
  const [text, setText] = useState("");
  const [isspeaking, setIsSpeaking] = useState(false);

  function JsontoText(data) {
    let newtext = "";
    data.steps.map((item) => {
      newtext +=
        "step" +
        " " +
        item.stepNumber +
        " " +
        item.stepName +
        " " +
        ":" +
        " " +
        item.description +
        "\n";
    });

    // console.log(newtext);
    setText(newtext);
  }

  const handleSpeak = () => {
    if (isspeaking) {
      setIsSpeaking(false);
    } else {
      speakInIndianAccent({ text: text });
      setIsSpeaking(true);
    } 
  };

  useEffect(() => {
    async function fetcheData() {
      try {
        const response = await fetch(
          `http://10.0.2.2:3000/exercises/${exerciseId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        setSteps(fetchedData);
        JsontoText(fetchedData);
        // console.log(fetchedData);
      } catch (error) {
        console.log(error);
      }
    }
    fetcheData();
  }, []);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="absolute top-12 left-5 z-10"
      >
        <FontAwesomeIcon icon={faAngleLeft} size={32} color="#6600CC" />
      </TouchableOpacity>
      {/* image crousel */}
      <View className="mt-5 ml-3 mr-3 w-94">
        <SliderForYogaPlayScreen />
      </View>
      {/* Details about the Yoga Step */}
      <View className="flex flex-row items-center justify-between pr-3 w-96 ml-3 mr-3 mt-3 p-1">
        <Text className="mt-2 mb-3 text-xl text-purple-600 font-light">
          Warrior Pose (Virabhadrasana II)
        </Text>
        <TouchableOpacity onPress={() => speakInIndianAccent({ text: text })}>
          {isspeaking ? (
            <MaterialIcons
              name="pause-circle-outline"
              size={30}
              color="#6600CC"
            />
          ) : (
            <AntDesign name="playcircleo" size={24} color="#6600CC" />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView className="max-h-96">
        <View className="w-94 ml-3 mr-3 bg-slate-200 p-4 mt-3 rounded-lg">
          <Steps data={steps} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YogaPlayScreen;

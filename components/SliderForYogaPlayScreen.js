import { Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

const SliderForYogaPlayScreen = () => {
  const images = [
    require("../assets/Yoga/WarrierPose/warrier.png"),
    require("../assets/Yoga/WarrierPose/warrier.png"),
    require("../assets/Yoga/WarrierPose/warrier.png"),
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274f"}
        inactiveDotColor={"#90A4AE"}
        ImageComponentStyle={{ borderRadius: 6, width: "50%" }}
      />
    </View>
  );
};

export default SliderForYogaPlayScreen;

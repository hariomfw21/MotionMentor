import { View, Text } from "react-native";
import React from "react";

const Steps = ({ data }) => {
  return (
    <>
      {data
        ? data.steps.map((item, index) => (
            <View className="mb-4" key={index}>
              <Text className="font-semibold mb-2">
                Step {item.stepNumber}: {item.stepName}
              </Text>
              <Text className="text-slate-600 text-sm">{item.description}</Text>
            </View>
          ))
        : null}
    </>
  );
};

export default Steps;

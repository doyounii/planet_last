import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

//토글 스위치
const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  const setBackgroundColor = (index) =>
    getSelectionMode === index ? selectionColor : "#1E2A35";
  const setTextColor = (index) =>
    getSelectionMode === index ? "white" : selectionColor;

  const defaultStyle = {
    flex: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <View>
      <View
        style={{
          height: 42,
          width: 145,
          marginBottom: 60,
          backgroundColor: "#1E2A35",
          borderRadius: 25,
          borderWidth: 1,
          borderColor: "#1E2A35",
          flexDirection: "row",
          justifyContent: "center",
          padding: 2,
          color: "#B4B6B8",
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            ...defaultStyle,
            backgroundColor: setBackgroundColor(1),
          }}
        >
          <Text
            style={{
              color: setTextColor(1),
            }}
          >
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            ...defaultStyle,
            backgroundColor: setBackgroundColor(2),
          }}
        >
          <Text
            style={{
              fontColor: "#B4B6B8",
              color: setTextColor(2),
            }}
          >
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomSwitch;

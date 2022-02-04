import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//토글 스위치
const CustomSwitch = ({
    navigation,
    selectionMode,
    roundCorner,
    option1,
    option2,
    onSelectSwitch,
    selectionColor
  }) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const [getRoundCorner, setRoundCorner] = useState(roundCorner);
  
    const updatedSwitchData = val => {
      setSelectionMode(val);
      onSelectSwitch(val);
    };

    const goExpensePage = () => {
      navigation.navigate('FloatingExpensePage');
    };
  
    return (
      <div>
        <div
          style={{
            height: 42,
            width: 145,
            backgroundColor: '#1E2A35',
            borderRadius: getRoundCorner ? 25 : 0,
            borderWidth: 1,
            borderColor: '#1E2A35',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 2,
            color: '#B4B6B8',
          }}>
            <div
              activeOpacity={1}
              onPress={() => updatedSwitchData(1)}
              style={{
                flex: 1,
                backgroundColor: getSelectionMode === 1 ? selectionColor : '#1E2A35',
                borderRadius: getRoundCorner ? 25 : 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <div
                style={{
                  color: getSelectionMode === 1 ? 'white' : selectionColor,
                }}>
                  {option1}
                </div>
                </div>
                <div
                  TouchableOpacity 
                  activeOpacity={1}
                  onPress={() => updatedSwitchData(2)}
                  style={{
                    flex: 1,
                    backgroundColor: getSelectionMode === 2 ? selectionColor : '#1E2A35',
                    borderRadius: getRoundCorner ? 25 : 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <div
                      style={{
                        fontColor: '#B4B6B8',
                        color: getSelectionMode === 2 ? 'white' : selectionColor,
                      }}>
                        {option2}
                      </div>
                  </div>
          </div>
      </div>
    );
  };

  export default CustomSwitch;
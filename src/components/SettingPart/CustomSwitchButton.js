import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
//import { useNavigate } from 'react-router-dom'

//토글 스위치
const CustomSwitchButton = ({
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
      //navigate('/FloatingPage' + val);
    };

    //const navigate = useNavigate();
  
    return (
      <View>
        <View
          style={{
            height: 20,
            width: 38,
            //backgroundColor: '#566479',
            backgroundColor: getSelectionMode === 1 ? '#566479' : '#00C982',
            borderRadius: getRoundCorner ? 25 : 0,
            borderWidth: 1,
            borderColor: '#566479',
            flexDirection: 'row',
            justifyContent: 'center',
            color: '#B4B6B8',
          }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => updatedSwitchData(1)}
              style={{
                flex: 1,
                backgroundColor: getSelectionMode === 1 ? selectionColor : '#00C982',
                borderRadius: getRoundCorner ? 25 : 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: getSelectionMode === 1 ? 'white' : selectionColor,
                }}>
                  {option1}
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  TouchableOpacity 
                  activeOpacity={1}
                  onPress={() => updatedSwitchData(2)}
                  style={{
                    flex: 1,
                    backgroundColor: getSelectionMode === 2 ? selectionColor : '#566479',
                    //backgroundColor: getSelectionMode === 2 ? selectionColor : '#00C982' ,
                    borderRadius: getRoundCorner ? 25 : 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text
                      style={{
                        fontColor: '#B4B6B8',
                        color: getSelectionMode === 2 ? 'white' : selectionColor,
                      }}>
                        {option2}
                      </Text>
                  </TouchableOpacity>
          </View>
      </View>
    );
  };

  export default CustomSwitchButton;
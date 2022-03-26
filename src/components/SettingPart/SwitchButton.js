import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CustomSwitchButton from './CustomSwitchButton';

//토글 스위치 Dashboard screen
export default function SwitchButton({navigation}){
    const onSelectSwitch = index => {
    };
  
    return (
      <View 
        style={{
            position: "relative",
            top: "-18px",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: "5%",
        }}>
        <View>
          <CustomSwitchButton
            selectionMode={1}
            roundCorner={true}
            onSelectSwitch={onSelectSwitch}
            selectionColor={'#ffffff'}
          />
        </View>
      </View>
    );
  }
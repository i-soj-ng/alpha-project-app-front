import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function TextBelow(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: widthPercentage(18),
        marginTop: heightPercentage(294),
      }}>
      <Text
        style={{
          fontFamily: 'NanumSquareRoundB',
          fontSize: fontPercentage(14),
          color: '#878787',
        }}>
        {props.text}
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Text
          style={{
            fontFamily: 'NanumSquareRoundB',
            fontSize: fontPercentage(14),
            color: '#9ABCED',
            marginLeft: widthPercentage(6),
          }}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

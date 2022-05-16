import React from 'react';
import { heightPercentage, widthPercentage } from "../../ResponsiveSize";
import { Image, View, TouchableOpacity } from "react-native";

export function TestApp() {
  return (
    <View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: widthPercentage(313),
          top: heightPercentage(12),
        }}
        activeOpacity={0.9}>
        <Image source={require('../assets/images/eye.png')} />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/check-mark.png')}
        style={{
          position: 'absolute',
          left: widthPercentage(313),
          top: heightPercentage(17),
        }}
      />
    </View>
  );
}

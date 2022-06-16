import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function Header(props) {
  return (
    <View style={styles.parentView}>
      <Image source={require('../../assets/images/making-page-icons/frame-icon.png')}/>
      <TouchableOpacity style={styles.xBtn}>
        <Image source={require('../../assets/images/making-page-icons/x-icon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textBtn}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    marginTop: heightPercentage(66),
    marginBottom: heightPercentage(12),
    alignItems: 'center',
  },
  xBtn: {
    position: 'absolute',
    left: widthPercentage(15),
  },
  textBtn: {
    position: 'absolute',
    right: widthPercentage(18),
  },
  text: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(16),
    color: '#1E3968DE',
  }
})

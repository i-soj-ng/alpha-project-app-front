import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function LAHeader(props) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.header}>{props.title}</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: widthPercentage(15),
          top: heightPercentage(56),
        }}
        onPress={() => props.setShowMenu(true)}
        activeOpacity={0.7}
      >
        <Image source={require('../../assets/images/camera-icon.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: fontPercentage(20),
    fontFamily: 'ONE Mobile POP OTF',
    fontWeight: '400',
    color: '#A6C9FF',
    marginTop: heightPercentage(66),
  },
});

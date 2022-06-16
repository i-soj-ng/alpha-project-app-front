import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function MainHeader(props) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.header}>{props.title}</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: widthPercentage(16),
          top: heightPercentage(63),
        }}
        onPress={props.onPress}
      >
        <Image source={require('../../assets/images/right-arrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: widthPercentage(16),
          top: heightPercentage(63),
        }}
        onPress={() => props.setShowMenu(true)}
        activeOpacity={0.7}
      >
        <Image source={require('../../assets/images/menu.png')} />
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

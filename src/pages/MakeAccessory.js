import React from 'react';
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import Icon from '../assets/images/one-person.svg'

import { Header } from "../components/make_filter/Header";

export function MakeAccessory() {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        "rgba(212, 217, 255, 0.4) 3.45%",
        "rgba(232, 236, 255, 0.4) 28.13%",
        "rgba(145, 183, 255, 0.4) 75.96%"
      ]} {...deg(198.19)}>
      <LinearGradient
        style={{flex: 1}}
        colors={[
          "rgba(229, 241, 255, 0.4) 0%",
          "rgba(221, 229, 250, 0.4) 100%"
        ]} {...deg(180)}>
        <Header name="프레임"/>
        <View style={styles.mainView}>
          <Text style={styles.centerText}>소품 눌러보며 착용샷 보기</Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#E0E9F9',
  },
  centerText: {
    fontFamily: 'NanumSquareR',
    fontSize: fontPercentage(16),
    color: '#0000007A',
  },
});

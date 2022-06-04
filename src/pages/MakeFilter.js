import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";

import { ChoiceBtn } from "../components/make_filter/ChoiceBtn";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export function MakeFilter() {
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
        <View style={{alignItems: 'center'}}>
          <Text style={styles.header}>필터만들기</Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: widthPercentage(16),
              top: heightPercentage(63),
            }}
          >
            <Image source={require('../assets/images/right-arrow.png')} />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.mainText}>인원 수를 선택해주세요</Text>
          <ChoiceBtn/>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>필터 제작 시작</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </LinearGradient>
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
  mainText: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: fontPercentage(18),
    color: '#1E3968DE',
    marginTop: heightPercentage(143),
    marginBottom: heightPercentage(40),
  },
  submitButton: {
    width: widthPercentage(350),
    height: heightPercentage(48),
    backgroundColor: '#A6C9FF',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPercentage(118),
  },
  submitText: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: fontPercentage(18),
    color: '#FFFFFF',
  },
});

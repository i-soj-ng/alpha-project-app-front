import React from 'react';
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { DetailContent } from "../components/look_around/DetailContent";

import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export function LookAroundDetail({ navigation }) {
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
          <Text style={styles.header}>구경하기</Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: widthPercentage(16),
              top: heightPercentage(63),
            }}
            onPress={() => navigation.navigate('LookAround')}
          >
            <Image source={require('../assets/images/right-arrow.png')} />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', flex: 1, alignItems: 'center', marginTop: heightPercentage(32)}}>
          <DetailContent/>
          <View style={styles.textBox}>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>프레임 이름</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.detailText}>킹받는 루피</Text>
                <TouchableOpacity>
                  <Text style={styles.addButton}>저장</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>프레임 유형</Text>
              <Text style={styles.detailText}>멀티프레임</Text>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>프레임 컷수</Text>
              <Text style={styles.detailText}>4컷</Text>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>사용한 AR필터</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.detailText}>xxxx 외 4</Text>
                <TouchableOpacity>
                  <Text style={styles.addButton}>저장</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>촬영 인원</Text>
              <Text style={styles.detailText}>2명</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={1.0}
          >
            <Text style={styles.buttonText}>전체저장</Text>
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
  image: {
    width: widthPercentage(358),
    height: heightPercentage(358),
    borderBottomWidth: 1,
    borderColor: '#A6C9FF',
  },
  textBox: {
    width: '100%',
    paddingHorizontal: widthPercentage(16),
    marginTop: heightPercentage(32)
  },
  eachText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'NanumSquareRoundB',
    marginBottom: heightPercentage(16),
  },
  boldText: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(14),
    color: '#1E3968DE',
  },
  addButton: {
    paddingVertical: heightPercentage(4),
    paddingHorizontal: widthPercentage(8),
    marginLeft: widthPercentage(8),
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(12),
    color: '#1E3968DE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF8C',
    backgroundColor: '#FFFFFF63',
    overflow: 'hidden',
  },
  detailText: {
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(14),
    color: '#1E3968DE',
  },
  button: {
    width: '100%',
    height: heightPercentage(81),
    backgroundColor: '#A6C9FF',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: fontPercentage(20),
    color: '#FFFFFF',
    marginTop: heightPercentage(18),
  },
});

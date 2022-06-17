import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function Content() {
  return (
    <View style={styles.content}>
      <Image
        source={require('../../assets/images/sample-frame.png')}
        style={{
          width: widthPercentage(106),
          height: heightPercentage(161),
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: widthPercentage(2),
          top: heightPercentage(135)
        }}
      >
        <Image source={require('../../assets/images/white-heart.png')}/>
      </TouchableOpacity>
      <View style={styles.contentBottom}>
        <View style={styles.likeNumView}>
          <Image source={require('../../assets/images/heart-vector.png')}/>
          <Text style={styles.likeNum}>850</Text>
        </View>
        <Text style={styles.bottomText}>#해시 #해시태그</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: widthPercentage(161),
    height: heightPercentage(179),
    marginRight: widthPercentage(16),
    marginLeft: widthPercentage(16),
    backgroundColor: '#FFFFFF63',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF8C',
    alignItems: 'center',
  },
  contentBottom: {
    width: widthPercentage(160),
    borderTopWidth: 1,
    borderColor: '#FFFFFF8C',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(8),
    color: '#1E3968DE',
    marginTop: heightPercentage(4),
  },
  likeNumView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF63',
    width: widthPercentage(30),
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#FFFFFF8C',
    position: 'absolute',
    left: widthPercentage(2),
    top: heightPercentage(1),
  },
  likeNum: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(8),
    color: '#1E396880',
    marginLeft: widthPercentage(4),
  }
});

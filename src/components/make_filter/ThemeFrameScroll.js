import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { heightPercentage, widthPercentage, fontPercentage } from "../../../ResponsiveSize";

export function ThemeFrameScroll(props) {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryBtn}>
          <Text style={styles.categoryText}>버블</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>
          <Text style={styles.categoryText}>생일</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>
          <Text style={styles.categoryText}>자연</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>
          <Text style={styles.categoryText}>패턴</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>
          <Text style={styles.categoryText}>기분</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.bundle}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.setFrame(require('../../assets/images/frames/bubble-frame.png'))}>
            <Image
              source={require('../../assets/images/frames/bubble-frame.png')}
              style={{
                width: widthPercentage(102),
                height: heightPercentage(155),
                marginHorizontal: widthPercentage(12),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.setFrame(require('../../assets/images/frames/bubble-frame2.png'))}>
            <Image
              source={require('../../assets/images/frames/bubble-frame2.png')}
              style={{
                width: widthPercentage(102),
                height: heightPercentage(155),
                marginHorizontal: widthPercentage(12),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.setFrame(require('../../assets/images/frames/bubble-frame3.png'))}>
            <Image
              source={require('../../assets/images/frames/bubble-frame3.png')}
              style={{
                width: widthPercentage(102),
                height: heightPercentage(155),
                marginHorizontal: widthPercentage(12),
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bundle}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.setFrame(require('../../assets/images/frames/bubble-frame4.png'))}>
            <Image
              source={require('../../assets/images/frames/bubble-frame4.png')}
              style={{
                width: widthPercentage(102),
                height: heightPercentage(155),
                marginHorizontal: widthPercentage(12),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.setFrame(require('../../assets/images/frames/bubble-frame5.png'))}>
            <Image
              source={require('../../assets/images/frames/bubble-frame5.png')}
              style={{
                width: widthPercentage(102),
                height: heightPercentage(155),
                marginHorizontal: widthPercentage(12),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.setFrame(require('../../assets/images/frames/bubble-frame6.png'))}>
            <Image
              source={require('../../assets/images/frames/bubble-frame6.png')}
              style={{
                width: widthPercentage(102),
                height: heightPercentage(155),
                marginHorizontal: widthPercentage(12),
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF2FF',
    width: '100%',
    height: heightPercentage(44),
  },
  categoryBtn: {
    marginHorizontal: widthPercentage(23)
  },
  categoryText: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(14),
    color: '#4A70A9',
  },
  scrollView: {
    height: heightPercentage(194),
    paddingVertical: heightPercentage(12),
  },
  bundle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: heightPercentage(10),
  }
});

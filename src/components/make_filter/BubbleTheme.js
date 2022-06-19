import React from 'react';
import { Image, ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import { heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function BubbleTheme(props) {
  return (
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
  );
}

const styles = StyleSheet.create({
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

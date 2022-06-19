import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { FrameColor } from "./FrameColor";
import { heightPercentage } from "../../../ResponsiveSize";

export function ColorScroll(props) {
  return (
    <View style={{alignItems: 'center'}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.bundle}>
          <FrameColor color="#A6C9FF" frameColor={props.setColor} url={require('../../assets/images/frames/blue-frame2.png')}/>
          <FrameColor color="#95D1D9" frameColor={props.setColor} url={require('../../assets/images/frames/mint-frame.png')}/>
          <FrameColor color="#FFCD6D" frameColor={props.setColor} url={require('../../assets/images/frames/yellow-frame.png')}/>
          <FrameColor color="#9ABCED" frameColor={props.setColor} url={require('../../assets/images/frames/blue-frame.png')}/>
          <FrameColor color="#BBDFA5" frameColor={props.setColor} url={require('../../assets/images/frames/green-frame.png')}/>
        </View>
        <View style={styles.bundle}>
          <FrameColor color="#FB9F8B" frameColor={props.setColor} url={require('../../assets/images/frames/red-frame.png')}/>
          <FrameColor color="#89D090" frameColor={props.setColor} url={require('../../assets/images/frames/blue-frame2.png')}/>
          <FrameColor color="#364E76" frameColor={props.setColor} url={require('../../assets/images/frames/blue-frame2.png')}/>
          <FrameColor color="#C93C3C" frameColor={props.setColor} url={require('../../assets/images/frames/blue-frame2.png')}/>
          <FrameColor color="#765136" frameColor={props.setColor} url={require('../../assets/images/frames/blue-frame2.png')}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: heightPercentage(112),
    paddingVertical: heightPercentage(12),
  },
  bundle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: heightPercentage(14),
  }
});

import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { FrameColor } from "./FrameColor";
import { heightPercentage } from "../../../ResponsiveSize";

export function ColorScroll(props) {
  return (
    <View style={{alignItems: 'center'}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.bundle}>
          <FrameColor color="#FFC4C4" frameColor={props.setColor}/>
          <FrameColor color="#FF8E8E" frameColor={props.setColor}/>
          <FrameColor color="#FFE39A" frameColor={props.setColor}/>
          <FrameColor color="#FFB389" frameColor={props.setColor}/>
          <FrameColor color="#A2D8FF" frameColor={props.setColor}/>
        </View>
        <View style={styles.bundle}>
          <FrameColor color="#A9D2B7" frameColor={props.setColor}/>
          <FrameColor color="#9BB29C" frameColor={props.setColor}/>
          <FrameColor color="#C93C3C" frameColor={props.setColor}/>
          <FrameColor color="#526299" frameColor={props.setColor}/>
          <FrameColor color="#757575" frameColor={props.setColor}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: heightPercentage(108),
    paddingVertical: heightPercentage(20),
  },
  bundle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: heightPercentage(14),
  }
});

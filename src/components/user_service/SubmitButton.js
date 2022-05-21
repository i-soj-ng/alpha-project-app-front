import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function SubmitButton(props) {
  return (
    <TouchableOpacity
      style={props.isDisabledButton ? styles.disabledButton : styles.abledButton}
      disabled={props.isDisabledButton}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  disabledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2D2D2',
    width: widthPercentage(350),
    height: heightPercentage(48),
    borderRadius: 54,
  },
  abledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A6C9FF',
    width: widthPercentage(350),
    height: heightPercentage(48),
    borderRadius: 54,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'NanumSquareRoundEB',
    fontSize: fontPercentage(16),
  },
});

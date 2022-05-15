import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function SubmitButton(props) {
  return (
    <TouchableOpacity
      style={props.isDisabledButton ? styles.disabledButton : styles.abledButton}
      disabled={props.isDisabledButton}
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
    backgroundColor: '#9ABCED',
    width: widthPercentage(350),
    height: heightPercentage(48),
    borderRadius: 54,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(16),
  },
});

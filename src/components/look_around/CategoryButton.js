import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function CategoryButton(props) {
  return (
    <View
      style={{
        width: props.width,
        marginRight: widthPercentage(10),
      }}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#1E396880',
    borderRadius: 12,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  buttonText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    color: '#1E3968DE',
  },
});

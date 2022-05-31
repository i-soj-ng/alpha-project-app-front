import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { fontPercentage, widthPercentage, heightPercentage } from "../../../ResponsiveSize";

export function Thumbnail(props) {
  return (
    <View style={{position: 'relative', marginRight: widthPercentage(22), marginBottom: heightPercentage(20)}}>
      <Image
        source={require('../../assets/images/thumbnail-image.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.deleteButton} onPress={() => props.isDeleted(true)}>
        <Image
          source={require('../../assets/images/x-vector.png')}
        />
      </TouchableOpacity>
      <View style={styles.dateBox}>
        <Text
          style={{
            fontSize: fontPercentage(8),
            fontFamily: 'NotoSansKR-Regular',
            color: '#1E396880',
          }}>2022.xx.xx</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: widthPercentage(160),
    height: heightPercentage(160),
    borderWidth: 1,
    borderColor: '#A6C9FF',
    borderRadius: 5,
  },
  deleteButton: {
    width: widthPercentage(9.33),
    height: heightPercentage(9.33),
    position: 'absolute',
    right: widthPercentage(9.33),
    top: heightPercentage(9.33),
    opacity: 0.9,
  },
  dateBox: {
    backgroundColor: '#DDDDDD99',
    width: widthPercentage(47),
    height: heightPercentage(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    position: 'absolute',
    right: widthPercentage(7),
    bottom: heightPercentage(7),
  },
});

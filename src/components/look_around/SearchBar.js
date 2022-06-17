import React from 'react';
import { Image, StyleSheet, TextInput, View, Text } from "react-native";
import { heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function SearchBar() {
  return (
    <View style={{alignItems: 'center', marginTop: heightPercentage(32)}}>
      <View style={{justifyContent: 'center'}}>
        <TextInput
          style={styles.searchBar}
          placeholder="#해시태그 검색"
          placeholderTextColor="#FFFFFFCC"
        />
        <Image
          source={require('../../assets/images/search-icon.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#9ABCED',
    width: widthPercentage(358),
    height: heightPercentage(32),
    borderRadius: 10,
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    left: widthPercentage(7),
    width: widthPercentage(22),
    height: heightPercentage(22),
  },
});

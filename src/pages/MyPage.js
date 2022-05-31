import React from 'react';
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import { Thumbnail } from "../components/main_page/Thumbnail";

export function MyPage({ navigation }) {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        "rgba(212, 217, 255, 0.4) 3.45%",
        "rgba(232, 236, 255, 0.4) 28.13%",
        "rgba(145, 183, 255, 0.4) 75.96%"
      ]} {...deg(198.19)}>
      <LinearGradient
        style={{flex: 1}}
        colors={[
          "rgba(229, 241, 255, 0.4) 0%",
          "rgba(221, 229, 250, 0.4) 100%"
        ]} {...deg(180)}>
        <View style={{alignItems: 'center', position: 'relative'}}>
          <Text style={styles.header}>마이페이지</Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: widthPercentage(350),
              top: heightPercentage(64),
            }}
            onPress={() => navigation.pop()}>
            <Image source={require('../assets/images/setting-icon.png')} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  secBackground: {
    flex: 1,
  },
  header: {
    fontSize: fontPercentage(20),
    fontFamily: 'ONE Mobile POP OTF',
    fontWeight: '400',
    color: '#A6C9FF',
    marginTop: heightPercentage(66),
  },
});

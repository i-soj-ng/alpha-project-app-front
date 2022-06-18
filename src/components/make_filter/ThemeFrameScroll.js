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
          <Image />
        </View>
        <View style={styles.bundle}>
          <Image />
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
    paddingVertical: heightPercentage(20),
  },
  bundle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: heightPercentage(14),
  }
});

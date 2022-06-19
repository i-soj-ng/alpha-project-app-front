import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { BubbleTheme } from "./BubbleTheme";
import { PatternTheme } from "./PatternTheme";
import { heightPercentage, widthPercentage, fontPercentage } from "../../../ResponsiveSize";

export function ThemeFrameScroll(props) {
  const [category, setCategory] = React.useState('버블');

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setCategory("버블")}
        >
          <Text style={styles.categoryText}>버블</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setCategory("생일")}
        >
          <Text style={styles.categoryText}>생일</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setCategory("자연")}
        >
          <Text style={styles.categoryText}>자연</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setCategory("패턴")}
        >
          <Text style={styles.categoryText}>패턴</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setCategory("기분")}
        >
          <Text style={styles.categoryText}>기분</Text>
        </TouchableOpacity>
      </View>
      {
        category === "패턴"
        ? <PatternTheme setFrame={props.setFrame}/>
        : <BubbleTheme setFrame={props.setFrame}/>
      }
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
});

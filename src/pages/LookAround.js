import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import { LAHeader } from "../components/look_around/LAHeader";
import { SearchBar } from "../components/look_around/SearchBar";
import { CategoryButton } from "../components/look_around/CategoryButton";
import { Content } from "../components/look_around/Content";
import { CategoryModal } from "../components/look_around/CategoryModal";

import LinearGradient from "react-native-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export function LookAround() {
  const [showModal, setShowModal] = React.useState(false);

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
        <LAHeader title="구경하기"/>
        <View>
          <SearchBar/>
          <View style={styles.buttonView}>
            <CategoryButton
              title="촬영 인원"
              width={widthPercentage(63)}
              isClicked={setShowModal}
            />
            <CategoryButton title="프레임 종류" width={widthPercentage(74)}/>
            <CategoryButton title="프레임 컷수" width={widthPercentage(74)}/>
          </View>
          <View style={styles.semiTitle}>
            <Text style={styles.textStyle}>추천 네컷</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/caret.png')}
                style={{
                  width: 14,
                  height: 14,
                }}
              />
              <Text style={styles.arrangeText}>최신순</Text>
            </View>
          </View>
          <ScrollView>
            <View style={{alignItems: 'center', marginTop: heightPercentage(24)}}>
              <View style={styles.contentRow}>
                <Content/>
                <Content/>
              </View>
              <View style={styles.contentRow}>
                <Content/>
                <Content/>
              </View>
              <View style={styles.contentRow}>
                <Content/>
                <Content/>
              </View>
            </View>
          </ScrollView>
        </View>
        <CategoryModal showModal={showModal} setShowModal={setShowModal}/>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: widthPercentage(16),
    marginTop: heightPercentage(24)
  },
  textStyle: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: fontPercentage(16),
    color: '#1E3968DE',
  },
  semiTitle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: heightPercentage(24),
    marginLeft: widthPercentage(16),
    marginRight: widthPercentage(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrangeText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(10),
    marginLeft: widthPercentage(2),
    color: '#1E396880',
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: heightPercentage(24),
  }
});



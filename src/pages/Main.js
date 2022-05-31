import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { fontPercentage, widthPercentage, heightPercentage } from "../../ResponsiveSize";
import { Thumbnail } from "../components/main_page/Thumbnail";
import { ModalView } from "../components/main_page/ModalView";
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from '../navigations/TabNavigation';

export function Main() {
  const [modalVisible, setModalVisible] = React.useState(false);

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
        <View style={{alignItems: 'center'}}>
          <Text style={styles.header}>PHOTOBUBBLE</Text>
        </View>
        <ModalView isReveal={modalVisible} isClose={setModalVisible}/>
        <View style={styles.alignView}>
          <Image
            source={require('../assets/images/caret.png')}
            style={{
              width: widthPercentage(14),
              height: heightPercentage(14),
            }}
          />
          <Text style={styles.alignText}>제작순</Text>
        </View>
        <View style={{
          marginLeft: widthPercentage(24),
          marginTop: heightPercentage(24),
        }}>
          <View style={{flexDirection: 'row'}}>
            <Thumbnail isDeleted={setModalVisible}/>
            <Thumbnail isDeleted={setModalVisible}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Thumbnail isDeleted={setModalVisible}/>
            <Thumbnail isDeleted={setModalVisible}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Thumbnail isDeleted={setModalVisible}/>
            <Thumbnail isDeleted={setModalVisible}/>
          </View>
        </View>
        {/*<NavigationContainer>*/}
        {/*  <TabNavigation />*/}
        {/*</NavigationContainer>*/}
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: fontPercentage(20),
    fontFamily: 'ONE Mobile POP OTF',
    fontWeight: '400',
    color: '#A6C9FF',
    marginTop: heightPercentage(66),
  },
  alignView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthPercentage(326),
    marginTop: heightPercentage(32),
  },
  alignText: {
    fontSize: fontPercentage(10),
    marginLeft: widthPercentage(2),
    fontFamily: 'NanumSquareRoundB',
    color: '#1E396880',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: "white",
    width: 230,
    height: 124,
  },
});

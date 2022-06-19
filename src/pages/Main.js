import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

import { Thumbnail } from "../components/main_page/Thumbnail";
import { ModalView } from "../components/main_page/ModalView";

import { fontPercentage, widthPercentage, heightPercentage } from "../../ResponsiveSize";

export function Main({ navigation }) {
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
          <Image
            style={styles.header}
            source={require('../assets/images/logo.png')}/>
          <TouchableOpacity style={styles.camera}>
            <Image
              source={require('../assets/images/camera-icon.png')}/>
          </TouchableOpacity>
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
        <ScrollView>
          <View style={{
            marginLeft: widthPercentage(24),
            marginTop: heightPercentage(24),
          }}>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail6.png')}
                date="2022.06.19"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail2.png')}
                date="2022.06.17"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail3.png')}
                date="2022.06.11"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail4.png')}
                date="2022.06.08"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail5.png')}
                date="2022.05.24"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail1.png')}
                date="2022.05.20"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail2.png')}
                date="2022.05.05"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
              <Thumbnail
                url={require('../assets/images/sample-images/thumbnail3.png')}
                date="2022.05.01"
                isDeleted={setModalVisible}
                onPress={() => navigation.navigate('MyFilter')}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: heightPercentage(66),
  },
  camera: {
    position: 'absolute',
    right: widthPercentage(15),
    top: heightPercentage(56),
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

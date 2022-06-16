import React from 'react';
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MainHeader } from "../components/main_page/MainHeader";

import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import { MenuModal } from "../components/main_page/MenuModal";

export function MyFilter({ navigation }) {
  const [showMenu, setShowMenu] = React.useState(false);

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
        <MainHeader
          title="내 필터"
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          onPress={() => navigation.pop()}
        />
        <MenuModal showMenu={showMenu} setShowMenu={setShowMenu}/>
        <View style={{width: '100%', flex: 1, alignItems: 'center', marginTop: heightPercentage(32)}}>
          <View style={styles.image}>
            <Image
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              source={require('../assets/images/sample-images/sample-image.png')} />
          </View>
          <View style={styles.textBox}>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>프레임 이름</Text>
              <TouchableOpacity>
                <Text style={styles.addButton}>프레임 추가</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>프레임 컷수</Text>
              <Text style={styles.detailText}>x컷</Text>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>필터 태그</Text>
              <Text style={styles.detailText}>#해시태그 #해시 #해시태그</Text>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>사용한 AR필터</Text>
              <Text style={styles.detailText}>루피 안경 외 4</Text>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>촬영 인원</Text>
              <Text style={styles.detailText}>2명</Text>
            </View>
            <View style={styles.eachText}>
              <Text style={styles.boldText}>제작일</Text>
              <Text style={styles.detailText}>2022.04.05</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={1.0}
            onPress={() => navigation.navigate('QRPop')}
          >
            <Text style={styles.buttonText}>사용하기</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: widthPercentage(358),
    height: heightPercentage(358),
    borderBottomWidth: 1,
    borderColor: '#A6C9FF',
  },
  textBox: {
    width: '100%',
    paddingHorizontal: widthPercentage(16),
    marginTop: heightPercentage(32)
  },
  eachText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'NanumSquareRoundB',
    marginBottom: heightPercentage(16),
  },
  boldText: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(14),
    color: '#1E3968DE',
  },
  addButton: {
    paddingVertical: heightPercentage(4.5),
    paddingHorizontal: widthPercentage(8),
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(12),
    color: '#1E3968DE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF8C',
    backgroundColor: '#FFFFFF63',
    overflow: 'hidden',
  },
  detailText: {
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(14),
    color: '#1E3968DE',
  },
  button: {
    width: '100%',
    height: heightPercentage(81),
    backgroundColor: '#A6C9FF',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: fontPercentage(20),
    color: '#FFFFFF',
    marginTop: heightPercentage(18),
  },
});

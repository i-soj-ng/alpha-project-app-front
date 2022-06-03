import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Header } from "../components/main_page/Header";
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import { MenuModal } from "../components/main_page/MenuModal";

export function QRPop({ navigation }) {
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
        <Header
          title="QR Pop"
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          onPress={() => navigation.pop()}
        />
        <MenuModal showMenu={showMenu} setShowMenu={setShowMenu}/>
        <View style={styles.parentView}>
          <View style={styles.QRView}>
            <Image
              source={require('../assets/images/QR-sample.png')}
              style={styles.QRImage}
            />
            <Text style={styles.QRText}>코드: 24D83445A</Text>
          </View>
          <Text style={styles.bottomText}>
            부스의 카메라에 QR코드를 스캔해 필터를 사용해보세요!{'\n'}
            QR코드가 인식되지 않는 경우 코드를 입력해주세요
          </Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  parentView: {
    alignItems: 'center',
    marginTop: heightPercentage(103),
  },
  QRView: {
    width: widthPercentage(356),
    height: heightPercentage(391),
    backgroundColor: '#FFFFFF80',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    alignItems: 'center',
  },
  QRImage: {
    width: widthPercentage(313),
    height: heightPercentage(313),
    marginTop: heightPercentage(16),
  },
  QRText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(18),
    color: '#1E3968DE',
  },
  bottomText: {
    marginTop: heightPercentage(20),
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(12),
    color: '#1E396880',
    textAlign: 'center',
    lineHeight: heightPercentage(16),
  },
});

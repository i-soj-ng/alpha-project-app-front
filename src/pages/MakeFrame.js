import React, {useEffect} from 'react';
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";
import { Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

import { MFHeader } from "../components/make_filter/MFHeader";
import { ColorScroll } from "../components/make_filter/ColorScroll";
import { ThemeFrameScroll } from "../components/make_filter/ThemeFrameScroll";

export function MakeFrame({ navigation }) {
  const [colorFrame, setColorFrame] = React.useState(require('../assets/images/frames/blue-frame.png'));
  const [category, setCategory] = React.useState('');
  const [themeFrame, setThemeFrame] = React.useState(require('../assets/images/frames/bubble-frame.png'));

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
        <MFHeader
          name="소품"
          onXbtnPress={() => navigation.navigate('Main')}
          onTextPress={() => navigation.pop()}
        />
        <View style={styles.mainView}>
          <View style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View>
                {
                  category === "테마"
                    ? <Image
                      source={themeFrame}
                      style={{
                        width: widthPercentage(251),
                        resizeMode: 'contain',
                      }}/>
                    : <Image
                      source={colorFrame}
                      style={{
                        width: widthPercentage(317),
                        resizeMode: 'contain',
                      }}/>
                }
              </View>
              <TouchableOpacity style={styles.completeBtn}>
                <Text style={styles.btnText}>완료</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.categoryTab}>
              <TouchableOpacity style={{marginLeft: widthPercentage(18)}}>
                <Image source={require('../assets/images/make-accessory/none-icon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: widthPercentage(76)}}>
                <Image source={require('../assets/images/make-accessory/heart-icon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: widthPercentage(76)}}
                onPress={() => setCategory("색상")}
              >
                <Text style={styles.categoryText}>색상</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: widthPercentage(76)}}
                onPress={() => setCategory("테마")}
              >
                <Text style={styles.categoryText}>테마</Text>
              </TouchableOpacity>
            </View>
            {
              category === "테마"
                ? <ThemeFrameScroll setFrame={setThemeFrame}/>
                : <ColorScroll setColor={setColorFrame}/>
            }
          </View>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#E0E9F9',
  },
  centerText: {
    fontFamily: 'NanumSquareR',
    fontSize: fontPercentage(16),
    color: '#0000007A',
  },
  completeBtn: {
    width: widthPercentage(56),
    height: heightPercentage(32),
    backgroundColor: '#ECF2FF',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#B4D2FF8C',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: widthPercentage(18),
    bottom: heightPercentage(14),
  },
  btnText: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(16),
    color: '#4A70A9',
  },
  categoryTab: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#83A4DE',
    height: heightPercentage(48),
    alignItems: 'center',
  },
  categoryText: {
    fontFamily: 'NanumSquareRoundB',
    color: '#FFFFFF',
    fontSize: fontPercentage(16),
  },
  scrollView: {
    height: heightPercentage(108),
    paddingVertical: heightPercentage(20),
  },
  bundle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: heightPercentage(14),
  }
});

import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../../../ResponsiveSize';
import CheckBox from '@react-native-community/checkbox';

export function HelloWorldApp() {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>로그인</Text>
      </View>
      <View>
        <Text style={styles.loginText}>포토버블에 로그인하세요</Text>
        <View style={{alignItems: 'center'}}>
          <TextInput style={styles.emailInput} placeholder="이메일 주소" />
          <TextInput style={styles.pwInput} placeholder="비밀번호" />
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox boxType="square" lineWidth={1.0} style={styles.checkBox} />
          <Text style={styles.checkBoxText}>로그인 상태 유지</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: widthPercentage(18),
          marginTop: heightPercentage(294),
        }}>
        <Text
          style={{
            fontFamily: 'NanumSquareRoundB',
            fontSize: fontPercentage(14),
            color: '#878787',
          }}>
          아직 회원이 아니신가요?
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              fontFamily: 'NanumSquareRoundB',
              fontSize: fontPercentage(14),
              color: '#9ABCED',
              marginLeft: widthPercentage(6),
            }}>
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parents: {
    alignItems: 'center',
  },
  header: {
    fontSize: fontPercentage(18),
    fontFamily: 'NanumSquareRoundB',
    marginTop: heightPercentage(64),
  },
  loginText: {
    fontSize: fontPercentage(20),
    fontFamily: 'NanumSquareRoundEB',
    color: '#1E3968DE',
    marginTop: heightPercentage(88),
    marginLeft: widthPercentage(21),
  },
  emailInput: {
    justifyContent: 'center',
    height: heightPercentage(48),
    width: widthPercentage(350),
    borderWidth: 1,
    borderRadius: 54,
    borderColor: '#9ABCED',
    fontFamily: 'NanumSquareRoundB',
    marginTop: heightPercentage(40),
    paddingVertical: heightPercentage(16),
    paddingHorizontal: widthPercentage(20),
  },
  pwInput: {
    justifyContent: 'center',
    height: heightPercentage(48),
    width: widthPercentage(350),
    borderWidth: 1,
    borderRadius: 54,
    borderColor: '#9ABCED',
    fontFamily: 'NanumSquareRoundB',
    marginTop: heightPercentage(12),
    paddingVertical: heightPercentage(16),
    paddingHorizontal: widthPercentage(20),
  },
  checkBox: {
    marginTop: widthPercentage(10),
    marginLeft: widthPercentage(16),
    transform: [{scaleX: 0.6}, {scaleY: 0.6}],
  },
  checkBoxText: {
    marginTop: widthPercentage(17),
    marginLeft: widthPercentage(5),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2D2D2',
    width: widthPercentage(350),
    height: heightPercentage(48),
    marginTop: widthPercentage(43),
    borderRadius: 54,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(16),
  },
});

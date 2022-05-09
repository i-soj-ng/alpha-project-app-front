import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Image,
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
      <View>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={styles.backButton}
            source={require('../../assets/images/chevron-left.png')}
          />
        </TouchableOpacity>
        <Text style={styles.header}>로그인</Text>
      </View>
      <View>
        <Text style={styles.loginText}>네컷사진에 로그인하세요</Text>
        <View style={styles.parents}>
          <TextInput style={styles.input} placeholder="이메일 주소" />
          <TextInput placeholder="비밀번호" />
        </View>
        <CheckBox boxType="square" />
        <Text>로그인 상태 유지</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text>로그인</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/images/question-mark.png')} />
        <Text>비밀번호를 잊으셨나요?</Text>
      </View>
      <View>
        <Text>아직 회원이 아니신가요?</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parents: {
    alignItems: 'center',
  },
  backButton: {
    height: heightPercentage(22),
    width: widthPercentage(22),
  },
  header: {
    fontSize: 18,
    fontFamily: 'NanumSquareRoundB',
    marginTop: 64,
    marginLeft: 172,
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'NanumSquareRoundB',
  },
  input: {
    justifyContent: 'center',
    height: heightPercentage(40),
    width: widthPercentage(350),
    borderWidth: 1,
  },
});

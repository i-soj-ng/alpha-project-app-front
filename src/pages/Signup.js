import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";

import { EmailInput } from "../components/user_service/EmailInput";
import { PasswordInput, CheckPasswordInput } from "../components/user_service/PasswordInput";
import { SubmitButton } from "../components/user_service/SubmitButton";
import { TextBelow } from "../components/user_service/TextBelow";

import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export function Signup({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');

  const [isDisabledButton, setIsDisabledButton] = React.useState(true);
  const [isEmailChecked, setIsEmailChecked] = React.useState(false);

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>회원가입</Text>
      </View>
      <View>
        <Text style={styles.titleText}>이메일과 비밀번호를{'\n'}입력해주세요</Text>
        <View style={{alignItems: 'center'}}>
          <View style={{position: 'relative'}}>
            <EmailInput
              setEmail={setEmail}
              password={password}
              setIsDisabledButton={setIsDisabledButton}
              setIsEmailChecked={setIsEmailChecked}
            />

            {/* 이메일이 형식에 맞을 경우 v 표시가 나타남 */}
            {
              isEmailChecked === true
              ?<Image
                  source={require('../assets/images/login-signup-icons/blue-check-mark.png')}
                  style={{
                    position: 'absolute',
                    left: widthPercentage(319),
                    top: heightPercentage(17),
                  }}
                />
                :null
            }
          </View>
          <View style={{position: 'relative'}}>
            <PasswordInput
              title="signup"
              setPassword={setPassword}
              placeholder="비밀번호"
              email={email}
              setIsDisabledButton={setIsDisabledButton}
            />
          </View>
          <View style={{position: 'relative'}}>
            <CheckPasswordInput
              setRePassword={setRePassword}
              placeholder="비밀번호 재확인"
              email={email}
              password={password}
              setIsDisabledButton={setIsDisabledButton}
            />
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: heightPercentage(4)}}>
          <SubmitButton
            name="다음"
            isDisabledButton={isDisabledButton}
            onPress={() => navigation.push('SignupAccept')}
          />
        </View>
        <TextBelow text="이미 회원이신가요?" name="로그인" onPress={() => navigation.navigate('Login')}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    fontSize: fontPercentage(18),
    fontFamily: 'NanumSquareRoundB',
    marginTop: heightPercentage(66),
  },
  titleText: {
    fontSize: fontPercentage(20),
    fontFamily: 'NanumSquareRoundEB',
    lineHeight: 24,
    color: '#1E3968DE',
    marginTop: heightPercentage(73),
    marginLeft: widthPercentage(22),
    marginBottom: heightPercentage(29),
  },
  checkBox: {
    marginTop: heightPercentage(3),
    marginLeft: widthPercentage(24),
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  checkBoxText: {
    marginTop: heightPercentage(10),
    fontSize: fontPercentage(12),
    color: '#505050',
    fontFamily: 'NanumSquareRoundB',
  },
});

import React from 'react';

import { EmailInput } from "../components/login/EmailInput";
import { StyleSheet, Text, View, Image } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import { PasswordInput, CheckPasswordInput } from "../components/login/PasswordInput";
import { SubmitButton } from "../components/login/SubmitButton";
import { TextBelow } from "../components/login/TextBelow";

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
            {
              isEmailChecked === true
              ?<Image
                  source={require('../assets/images/check-mark.png')}
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
    marginTop: heightPercentage(64),
  },
  titleText: {
    fontSize: fontPercentage(20),
    fontFamily: 'NanumSquareRoundEB',
    lineHeight: 24,
    color: '#1E3968DE',
    marginTop: heightPercentage(73),
    marginLeft: widthPercentage(21),
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

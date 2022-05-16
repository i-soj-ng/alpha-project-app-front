import React from 'react';

import { EmailInput } from "../components/login/EmailInput";
import { StyleSheet, Text, View } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import { PasswordInput } from "../components/login/PasswordInput";
import { SubmitButton } from "../components/login/SubmitButton";
import CheckBox from "@react-native-community/checkbox";
import { TextBelow } from "../components/login/TextBelow";

export function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabledButton, setIsDisabledButton] = React.useState(true);

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>로그인</Text>
      </View>
      <View>
        <Text style={styles.titleText}>포토버블에 로그인하세요</Text>
        <View style={{alignItems: 'center'}}>
          <EmailInput
            setEmail={setEmail}
            password={password}
            setIsDisabledButton={setIsDisabledButton}
          />
          <PasswordInput
            setPassword={setPassword}
            placeholder="비밀번호"
            email={email}
            setIsDisabledButton={setIsDisabledButton}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox boxType="square" lineWidth={1.0} style={styles.checkBox} />
          <Text style={styles.checkBoxText}>로그인 상태 유지</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: heightPercentage(43)}}>
          <SubmitButton
            name="로그인"
            isDisabledButton={isDisabledButton}
          />
        </View>
        <TextBelow text="아직 회원이 아니신가요?" name="회원가입"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: fontPercentage(18),
    fontFamily: 'NanumSquareRoundB',
    marginTop: heightPercentage(64),
  },
  titleText: {
    fontSize: fontPercentage(20),
    fontFamily: 'NanumSquareRoundEB',
    color: '#1E3968DE',
    marginTop: heightPercentage(88),
    marginLeft: widthPercentage(21),
    marginBottom: heightPercentage(40),
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

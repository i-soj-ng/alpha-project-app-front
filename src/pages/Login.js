import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import { EmailInput } from "../components/user_service/EmailInput";
import { PasswordInput } from "../components/user_service/PasswordInput";
import { SubmitButton } from "../components/user_service/SubmitButton";
import { TextBelow } from "../components/user_service/TextBelow";

import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export function Login({ navigation }) {
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
            title="login"
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
            onPress={() => navigation.navigate('Main')}
          />
        </View>
        <TextBelow text="아직 회원이 아니신가요?" name="회원가입" onPress={() => navigation.navigate('Signup')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: fontPercentage(18),
    fontFamily: 'NanumSquareRoundB',
    marginTop: heightPercentage(66),
  },
  titleText: {
    fontSize: fontPercentage(20),
    fontFamily: 'NanumSquareRoundEB',
    color: '#1E3968DE',
    marginTop: heightPercentage(88),
    marginLeft: widthPercentage(22),
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

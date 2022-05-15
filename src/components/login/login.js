import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../../../ResponsiveSize';
import CheckBox from '@react-native-community/checkbox';

export function HelloWorldApp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailInputStyle, setEmailInputStyle] = React.useState(styles.input);
  const [pwInputStyle, setPwInputStyle] = React.useState(styles.input);
  const [showPw, setShowPw] = React.useState(true);
  const [pwIcon, setPwIcon] = React.useState(require('../../assets/images/eye.png'));
  const [isRevealIcon, setIsRevealIcon] = React.useState(false);
  const [isDisableButton, setIsDisableButton] = React.useState(true);

  const CompleteEmailInput = () => {
    if (email.length > 0) {
      setEmailInputStyle(styles.completeInput);
    } else {
      setEmailInputStyle(styles.input);
    }
  };

  const CompletePwInput = () => {
    if (password.length > 0) {
      setPwInputStyle(styles.completeInput);
    } else {
      setPwInputStyle(styles.input);
    }
  };

  const OnEyePress = () => {
    setShowPw(!showPw);
    if (showPw == true) {
      setPwIcon(require('../../assets/images/eye-hide.png'));
    } else {
      setPwIcon(require('../../assets/images/eye.png'));
    }
  };

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>로그인</Text>
      </View>
      <View>
        <Text style={styles.loginText}>포토버블에 로그인하세요</Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={emailInputStyle}
            placeholder="이메일 주소"
            onChangeText={email => {
              setEmail(email);
              if (email.length > 0 && password.length > 2) {
                setIsDisableButton(false);
              } else {
                setIsDisableButton(true);
              }
            }}
            value={email}
            onFocus={() => setEmailInputStyle(styles.focusInput)}
            onBlur={CompleteEmailInput}
          />
          <View style={{position: 'relative'}}>
            <TextInput
              style={pwInputStyle}
              placeholder="비밀번호"
              secureTextEntry={showPw}
              onChangeText={pw => {
                setPassword(pw);
                if (pw.length > 0) {
                  setIsRevealIcon(true);
                  if (email.length > 0 && pw.length > 2) {
                    setIsDisableButton(false);
                  } else {
                    setIsDisableButton(true);
                  }
                } else {
                  setIsRevealIcon(false);
                }
              }}
              value={password}
              onFocus={() => setPwInputStyle(styles.focusInput)}
              onBlur={CompletePwInput}
            />
            {
              isRevealIcon == true
                ? <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: widthPercentage(313),
                    top: heightPercentage(12),
                  }}
                  onPress={OnEyePress}
                  activeOpacity={0.9}>
                  <Image source={pwIcon} />
                </TouchableOpacity>
                : null
            }
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox boxType="square" lineWidth={1.0} style={styles.checkBox} />
          <Text style={styles.checkBoxText}>로그인 상태 유지</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            disabled={isDisableButton}
            style={isDisableButton ? styles.disabledButton : styles.abledButton}
            activeOpacity={0.8}>
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
    marginBottom: heightPercentage(40),
  },
  input: {
    justifyContent: 'center',
    height: heightPercentage(48),
    width: widthPercentage(350),
    borderWidth: 1,
    borderRadius: 54,
    borderColor: '#9ABCED',
    fontFamily: 'NanumSquareRoundB',
    marginBottom: heightPercentage(12),
    paddingVertical: heightPercentage(16),
    paddingHorizontal: widthPercentage(20),
  },
  focusInput: {
    justifyContent: 'center',
    height: heightPercentage(48),
    width: widthPercentage(350),
    borderWidth: 1.5,
    borderRadius: 54,
    borderColor: '#5B8CD1DE',
    fontFamily: 'NanumSquareRoundB',
    marginBottom: heightPercentage(12),
    paddingVertical: heightPercentage(16),
    paddingHorizontal: widthPercentage(20),
  },
  completeInput: {
    justifyContent: 'center',
    height: heightPercentage(48),
    width: widthPercentage(350),
    borderRadius: 54,
    backgroundColor: '#ECF2FF',
    fontFamily: 'NanumSquareRoundB',
    marginBottom: heightPercentage(12),
    paddingVertical: heightPercentage(16),
    paddingHorizontal: widthPercentage(20),
  },
  checkBox: {
    marginTop: heightPercentage(3),
    marginLeft: widthPercentage(24),
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  checkBoxText: {
    marginTop: widthPercentage(10),
    fontSize: fontPercentage(12),
    color: '#505050',
    fontFamily: 'NanumSquareRoundB',
  },
  disabledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2D2D2',
    width: widthPercentage(350),
    height: heightPercentage(48),
    marginTop: widthPercentage(43),
    borderRadius: 54,
  },
  abledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ABCED',
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

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

export function Signup() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPw, setCheckPw] = React.useState('');

  const [emailInputStyle, setEmailInputStyle] = React.useState(styles.input);
  const [pwInputStyle, setPwInputStyle] = React.useState(styles.input);
  const [rePwInputStyle, setRePwInputStyle] = React.useState(styles.input);

  const [showPw, setShowPw] = React.useState(true);
  const [showRePw, setShowRePw] = React.useState(true);

  const [isEmailChecked, setIsEmailChecked] = React.useState(false);

  const [pwIcon, setPwIcon] = React.useState(require('../../assets/images/eye.png'));
  const [rePwIcon, setRePwIcon] = React.useState(require('../../assets/images/eye.png'));
  const [isRevealIcon, setIsRevealIcon] = React.useState(false);
  const [isRevealReIcon, setIsRevealReIcon] = React.useState(false);
  const [isDisableButton, setIsDisableButton] = React.useState(true);

  const CheckEmail = () => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email)) {
      setIsEmailChecked(true);
    } else {
      setIsEmailChecked(false);
    }
  };

  const CompleteEmailInput = (e) => {
    if (email.length > 0) {
      setEmailInputStyle(styles.completeInput);
      CheckEmail();
    } else {
      setEmailInputStyle(styles.input);
      setIsEmailChecked(false);
    }
  };

  const CompletePwInput = () => {
    if (password.length > 0) {
      setPwInputStyle(styles.completeInput);
      if (password.length > 4) {

      }
    } else {
      setPwInputStyle(styles.input);
    }
  };

  const CompleteRePwInput = () => {
    if (checkPw.length > 0) {
      setRePwInputStyle(styles.completeInput);
    } else {
      setRePwInputStyle(styles.input);
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

  const OnSecondEyePress = () => {
    setShowRePw(!showRePw);
    if (showRePw == true) {
      setRePwIcon(require('../../assets/images/eye-hide.png'));
    } else {
      setRePwIcon(require('../../assets/images/eye.png'));
    }
  };

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>회원가입</Text>
      </View>
      <View>
        <Text style={styles.titleText}>이메일과 비밀번호를{'\n'}입력해주세요</Text>
        <View style={{alignItems: 'center'}}>
          <View style={{position: 'relative'}}>
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
            {
              isEmailChecked == true
              ? <Image
                  style={{
                    position: 'absolute',
                    left: widthPercentage(313),
                    top: heightPercentage(17),
                  }}
                  source={require('../../assets/images/check-mark.png')} />
                : null
            }
          </View>
          <View style={{position: 'relative'}}>
            <TextInput
              style={pwInputStyle}
              placeholder="비밀번호"
              secureTextEntry={showPw}
              onChangeText={pw => {
                setPassword(pw);
                if (pw.length > 0) {
                  setIsRevealIcon(true);
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
          <View style={{position: 'relative'}}>
            <TextInput
              style={rePwInputStyle}
              placeholder="비밀번호 재확인"
              secureTextEntry={showRePw}
              onChangeText={pw => {
                setCheckPw(pw);
                if (pw.length > 0) {
                  setIsRevealReIcon(true);
                  if (email.length > 0 && pw.length > 2) {
                    setIsDisableButton(false);
                  } else {
                    setIsDisableButton(true);
                  }
                } else {
                  setIsRevealReIcon(false);
                }
              }}
              value={checkPw}
              onFocus={() => setRePwInputStyle(styles.focusInput)}
              onBlur={CompleteRePwInput}
            />
            {
              isRevealReIcon == true
                ? <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: widthPercentage(313),
                    top: heightPercentage(12),
                  }}
                  onPress={OnSecondEyePress}
                  activeOpacity={0.9}>
                  <Image source={rePwIcon} />
                </TouchableOpacity>
                : null
            }
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            disabled={isDisableButton}
            style={isDisableButton ? styles.disabledButton : styles.abledButton}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: widthPercentage(19),
          marginTop: heightPercentage(291),
        }}>
        <Text
          style={{
            fontFamily: 'NanumSquareRoundB',
            fontSize: fontPercentage(14),
            color: '#878787',
          }}>
          이미 회원이신가요?
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              fontFamily: 'NanumSquareRoundB',
              fontSize: fontPercentage(14),
              color: '#9ABCED',
              marginLeft: widthPercentage(6),
            }}>
            로그인
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
  titleText: {
    fontSize: fontPercentage(20),
    fontFamily: 'NanumSquareRoundEB',
    lineHeight: 24,
    color: '#1E3968DE',
    marginTop: heightPercentage(73),
    marginLeft: widthPercentage(21),
    marginBottom: heightPercentage(29),
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
    marginTop: heightPercentage(10),
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
    marginTop: heightPercentage(4),
    borderRadius: 54,
  },
  abledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ABCED',
    width: widthPercentage(350),
    height: heightPercentage(48),
    marginTop: heightPercentage(4),
    borderRadius: 54,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(16),
  },
});

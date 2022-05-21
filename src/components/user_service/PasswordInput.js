import React, { useEffect } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function PasswordInput(props) {
  const [password, setPassword] = React.useState('');
  const [pwInputStyle, setPwInputStyle] = React.useState(styles.input);
  const [showPw, setShowPw] = React.useState(true);
  const [pwIcon, setPwIcon] = React.useState(require('../../assets/images/eye.png'));
  const [isRevealIcon, setIsRevealIcon] = React.useState(false);
  const [isPwChecked, setIsPwChecked] = React.useState(false);

  // 비밀번호 입력 완료시, Input Style 변경
  const CompletePwInput = () => {
    if (password.length > 0) {
      setPwInputStyle(styles.completeInput);
    } else {
      setPwInputStyle(styles.input);
    }
  };

  // 비밀번호 보이기
  const OnEyePress = () => {
    setShowPw(!showPw);
    if (showPw === true) {
      setPwIcon(require('../../assets/images/eye-hide.png'));
    } else {
      setPwIcon(require('../../assets/images/eye.png'));
    }
  };

  useEffect(() => {
    props.setPassword(password)

    // 버튼 활성화
    if (props.email.length > 0 && password.length > 2) {
      props.setIsDisabledButton(false);
    } else {
      props.setIsDisabledButton(true);
    }
  },[password])

  return (
    <View style={{position: "relative"}}>
      <TextInput
        style={pwInputStyle}
        placeholder={props.placeholder}
        secureTextEntry={showPw}
        onChangeText={pw => {
          setPassword(pw);
          if (pw.length > 0) {
            setIsRevealIcon(true);
            if (props.title === "signup") {
              if (props.email && password.length > 3) {
                setIsPwChecked(true);
                console.log("password= ", password)
              } else {
                setIsPwChecked(false);
              }
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
        isRevealIcon === true
          ? (isPwChecked === true
              ? <View style={{position: 'absolute'}}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: widthPercentage(284),
                    top: heightPercentage(12),
                  }}
                  onPress={OnEyePress}
                  activeOpacity={0.9}>
                  <Image source={pwIcon} />
                </TouchableOpacity>
                <Image
                  source={require('../../assets/images/blue-check-mark.png')}
                  style={{
                    position: 'absolute',
                    left: widthPercentage(319),
                    top: heightPercentage(17),
                  }}
                />
              </View>
              : <TouchableOpacity
                style={{
                  position: 'absolute',
                  left: widthPercentage(313),
                  top: heightPercentage(12),
                }}
                onPress={OnEyePress}
                activeOpacity={0.9}>
                <Image source={pwIcon} />
              </TouchableOpacity>
          )
          : null
      }
    </View>
  );
}

// 비밀번호 재확인 컴포넌트
export function CheckPasswordInput(props) {
  const [rePassword, setRePassword] = React.useState('');
  const [pwInputStyle, setPwInputStyle] = React.useState(styles.input);
  const [showPw, setShowPw] = React.useState(true);
  const [pwIcon, setPwIcon] = React.useState(require('../../assets/images/eye.png'));
  const [isRevealIcon, setIsRevealIcon] = React.useState(false);
  const [isPwChecked, setIsPwChecked] = React.useState(false);

  const CompletePwInput = () => {
    if (rePassword.length > 0) {
      setPwInputStyle(styles.completeInput);
    } else {
      setPwInputStyle(styles.input);
    }
  };

  const OnEyePress = () => {
    setShowPw(!showPw);
    if (showPw === true) {
      setPwIcon(require('../../assets/images/eye-hide.png'));
    } else {
      setPwIcon(require('../../assets/images/eye.png'));
    }
  };

  useEffect(() => {
    props.setRePassword(rePassword)
    if (props.email && (rePassword === props.password)) {
      setIsPwChecked(true);
      props.setIsDisabledButton(false);
    } else {
      setIsPwChecked(false);
      props.setIsDisabledButton(true);
    }
  },[rePassword])

  return (
    <View style={{position: "relative"}}>
      <TextInput
        style={pwInputStyle}
        placeholder={props.placeholder}
        secureTextEntry={showPw}
        onChangeText={pw => {
          setRePassword(pw);
          if (pw.length > 0) {
            setIsRevealIcon(true);
            console.log("!!!password= ", props.password);
          } else {
            setIsRevealIcon(false);
          }
        }}
        value={rePassword}
        onFocus={() => setPwInputStyle(styles.focusInput)}
        onBlur={CompletePwInput}
      />
      {
        isRevealIcon === true
          ? (isPwChecked === true
              ? <View style={{position: 'absolute'}}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: widthPercentage(284),
                    top: heightPercentage(12),
                  }}
                  onPress={OnEyePress}
                  activeOpacity={0.9}>
                  <Image source={pwIcon} />
                </TouchableOpacity>
                <Image
                  source={require('../../assets/images/blue-check-mark.png')}
                  style={{
                    position: 'absolute',
                    left: widthPercentage(319),
                    top: heightPercentage(17),
                  }}
                />
              </View>
              : <TouchableOpacity
                style={{
                  position: 'absolute',
                  left: widthPercentage(313),
                  top: heightPercentage(12),
                }}
                onPress={OnEyePress}
                activeOpacity={0.9}>
                <Image source={pwIcon} />
              </TouchableOpacity>
          )
          : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
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
});

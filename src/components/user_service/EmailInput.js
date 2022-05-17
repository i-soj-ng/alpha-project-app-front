import React, { useEffect } from 'react';
import { StyleSheet, TextInput } from "react-native";
import { heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function EmailInput(props) {
  const [email, setEmail] = React.useState('');
  const [emailInputStyle, setEmailInputStyle] = React.useState(styles.input);

  const CompleteEmailInput = () => {
    if (email.length > 0) {
      setEmailInputStyle(styles.completeInput);
    } else {
      setEmailInputStyle(styles.input);
    }
  };

  const CheckEmail = () => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };

  useEffect(() => {
    if (CheckEmail() === true) {
      props.setEmail(email);
      if (props.setIsEmailChecked) {
        props.setIsEmailChecked(true);
      }
    } else {
      if (props.setIsEmailChecked) {
        props.setIsEmailChecked(false);
      }
    }
  },[email]);

  return (
    <TextInput
      style={emailInputStyle}
      placeholder="이메일 주소"
      onChangeText={email => {
        setEmail(email);
        if (email.length > 0 && props.password.length > 2) {
          props.setIsDisabledButton(false);
        } else {
          props.setIsDisabledButton(true);
        }
      }}
      value={email}
      onFocus={() => setEmailInputStyle(styles.focusInput)}
      onBlur={CompleteEmailInput}
    />
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

import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { SubmitButton } from "../components/user_service/SubmitButton";
import { CheckMark } from "../components/user_service/CheckMark";

import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export function SignupAccept({ navigation }) {
  const [isDisabledButton, setIsDisabledButton] = React.useState(true);

  const [allCheck, setAllCheck] = React.useState(false);
  const [firstCheck, setFirstCheck] = React.useState(false);
  const [secondCheck, setSecondCheck] = React.useState(false);
  const [thirdCheck, setThirdCheck] = React.useState(false);

  // 전체동의 체크 활성화 및 확인 버튼 활성화
  useEffect(() => {
    if (firstCheck === true && secondCheck === true) {
      setIsDisabledButton(false);
      if (thirdCheck === true) {
        setAllCheck(true);
      }
    } else {
      setIsDisabledButton(true);
    }

    if (firstCheck === false || secondCheck === false || thirdCheck === false) {
      setAllCheck(false);
    }
  },[firstCheck, secondCheck, thirdCheck])

  return (
    <View>
      <View style={{alignItems: 'center', position: 'relative'}}>
        <Text style={styles.header}>약관 동의</Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: widthPercentage(16),
            top: heightPercentage(64),
          }}
          onPress={() => navigation.pop()}>
          <Image source={require('../assets/images/right-arrow.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.titleText}>약관을 확인해주세요</Text>
        <CheckMark
          name="entire-accept"
          title="약관 전체동의"
          setCheck={setAllCheck}
          isChecked={allCheck}
          setFirstAccept={setFirstCheck}
          setSecondAccept={setSecondCheck}
          setThirdAccept={setThirdCheck}
          isFirstChecked={firstCheck}
          isSecondChecked={secondCheck}
          isThirdChecked={thirdCheck}
        />
        </View>
        <CheckMark
          name="accept"
          title="필수 약관 전체동의"
          setCheck={setFirstCheck}
          isChecked={firstCheck}
        />
        <CheckMark
          name="accept"
          title="본인 확인 서비스 전체동의"
          setCheck={setSecondCheck}
          isChecked={secondCheck}
        />
        <CheckMark
          name="accept"
          title="마케팅 이용에 대한 동의(선택)"
          setCheck={setThirdCheck}
          isChecked={thirdCheck}
        />
      <View style={{alignItems: 'center', marginTop: heightPercentage(318)}}>
        <SubmitButton
          name="확인"
          isDisabledButton={isDisabledButton}
          onPress={() => navigation.push('Nickname')}
        />
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
    marginBottom: heightPercentage(79),
  },
});

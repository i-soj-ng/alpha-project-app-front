import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { SubmitButton } from "../components/user_service/SubmitButton";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export function Nickname({ navigation }) {
  const [nickName, setNickName] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [isDisabledButton, setIsDisabledButton] = React.useState(true);

  // 가입완료 버튼 활성화
  useEffect(() => {
    setCount(nickName.length);
    if (nickName.length > 0) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  },[nickName]);

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>닉네임</Text>
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
        <Text style={styles.titleText}>반가워요!{'\n'}닉네임을 입력해주세요</Text>
        <View style={{alignItems: 'center'}}>
          <View>
            <TextInput style={styles.textInput} onChangeText={setNickName} maxLength={15}/>
            <Text style={styles.countText}>{count}/15</Text>
          </View>
          <SubmitButton
            name="가입완료"
            isDisabledButton={isDisabledButton}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
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
    lineHeight: 24,
    color: '#1E3968DE',
    marginTop: heightPercentage(73),
    marginLeft: widthPercentage(22),
    marginBottom: heightPercentage(29),
  },
  textInput: {
    width: widthPercentage(338),
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    marginBottom: heightPercentage(69),
    fontFamily: 'NanumSquareRoundB',
  },
  countText: {
    color: '#949494',
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(12),
    position: 'absolute',
    right: 0,
    marginBottom: heightPercentage(8),
  },
});

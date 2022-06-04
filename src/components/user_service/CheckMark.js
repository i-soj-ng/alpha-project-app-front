import React, { useEffect } from "react";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function CheckMark(props) {
  const [allCheckMark, setAllCheckMark] = React.useState(require('../../assets/images/login-signup-icons/gray-check-circle.png'))
  const [checkMark, setCheckMark] = React.useState(require('../../assets/images/login-signup-icons/gray-check-mark.png'))

  if (props.name === "entire-accept") {
    const onCheckPress = () => {
      props.setCheck(!props.isChecked);

      if (props.isChecked === false) {
        props.setFirstAccept(true);
        props.setSecondAccept(true);
        props.setThirdAccept(true);
      } else {
        props.setFirstAccept(false);
        props.setSecondAccept(false);
        props.setThirdAccept(false);
      }
    };

    useEffect(() => {
      if (props.isChecked === true) {
        setAllCheckMark(require('../../assets/images/login-signup-icons/blue-check-circle.png'));
      } else {
        setAllCheckMark(require('../../assets/images/login-signup-icons/gray-check-circle.png'));
      }
    },[props.isChecked]);

    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: heightPercentage(8)}}>
        <TouchableOpacity onPress={onCheckPress} activeOpacity={0.7}>
          <Image
            source={allCheckMark}
            style={{marginLeft: widthPercentage(22)}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'NanumSquareRoundB',
            fontSize: fontPercentage(18),
            marginLeft: widthPercentage(11),
          }}>
          약관 전체동의
        </Text>
      </View>
    );
  }

  else {
    const onCheckPress = () => {
      props.setCheck(!props.isChecked);
    };

    useEffect(() => {
      if (props.isChecked === true) {
        setCheckMark(require('../../assets/images/login-signup-icons/big-blue-check-mark.png'));
        props.setCheck(true);
      } else {
        setCheckMark(require('../../assets/images/login-signup-icons/gray-check-mark.png'));
      }
    },[props.isChecked]);

    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: heightPercentage(22)}}>
        <TouchableOpacity onPress={onCheckPress} activeOpacity={0.7}>
          <Image
            source={checkMark}
            style={{
              marginLeft: widthPercentage(28),
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'NanumSquareRoundB',
            fontSize: fontPercentage(14),
            marginLeft: widthPercentage(17),
          }}>
          {props.title}
        </Text>
      </View>
    );
  }
}

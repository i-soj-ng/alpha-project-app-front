import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function ChoiceBtn() {
  const [firstBtnStyle, setFirstBtnStyle] = React.useState(styles.button);
  const [secondBtnStyle, setSecondBtnStyle] = React.useState(styles.button);
  const [thirdBtnStyle, setThirdBtnStyle] = React.useState(styles.button);

  const [firstBtnClicked, setFirstBtnClicked] = React.useState(false);
  const [secondBtnClicked, setSecondBtnClicked] = React.useState(false);
  const [thirdBtnClicked, setThirdBtnClicked] = React.useState(false);

  const btnClicked = (id) => {
    if (id === 1) {
      setFirstBtnClicked(!firstBtnClicked);
      setSecondBtnClicked(false);
      setThirdBtnClicked(false);
    } else if (id === 2) {
      setSecondBtnClicked(!secondBtnClicked);
      setFirstBtnClicked(false);
      setThirdBtnClicked(false);
    } else if (id === 3) {
      setThirdBtnClicked(!thirdBtnClicked);
      setFirstBtnClicked(false);
      setSecondBtnClicked(false);
    }
  }

  useEffect(() => {
    if (firstBtnClicked === true) {
      setFirstBtnStyle(styles.clickedBtn);
      setSecondBtnStyle(styles.button);
      setThirdBtnStyle(styles.button);
    } else if (secondBtnClicked === true) {
      setFirstBtnStyle(styles.button);
      setSecondBtnStyle(styles.clickedBtn);
      setThirdBtnStyle(styles.button);
    } else if (thirdBtnClicked === true) {
      setFirstBtnStyle(styles.button);
      setSecondBtnStyle(styles.button);
      setThirdBtnStyle(styles.clickedBtn);
    } else {
      setFirstBtnStyle(styles.button);
      setSecondBtnStyle(styles.button);
      setThirdBtnStyle(styles.button);
    }
  },[firstBtnClicked, secondBtnClicked, thirdBtnClicked])

  return (
    <View>
      <TouchableOpacity
        style={firstBtnStyle}
        onPress={() => btnClicked(1)}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>1명</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={secondBtnStyle}
        onPress={() => btnClicked(2)}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>2명</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={thirdBtnStyle}
        onPress={() => btnClicked(3)}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>3명</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: widthPercentage(288),
    height: heightPercentage(60),
    backgroundColor: '#FFFFFF63',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#FFFFFF8F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightPercentage(12),
  },
  buttonText: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(18),
    color: '#1E3968DE',
  },
  clickedBtn: {
    width: widthPercentage(288),
    height: heightPercentage(60),
    backgroundColor: '#D9E6FF',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#9ABCED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightPercentage(12),
  },
});

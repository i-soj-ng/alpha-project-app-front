import React, {useEffect} from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function FrameColor(props) {
  const [likeClicked, isLikeClicked] = React.useState(false);
  const [heartIcon, setHeartIcon] = React.useState(require('../../assets/images/make-accessory/empty-heart.png'));
  const [colorClicked, isColorClicked] = React.useState(false);

  useEffect(() => {
    if (likeClicked === true) {
      setHeartIcon(require('../../assets/images/make-accessory/like-icon.png'));
    } else {
      setHeartIcon(require('../../assets/images/make-accessory/empty-heart.png'));
    }
  }, [likeClicked, colorClicked]);

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => props.frameColor(props.color)}>
          <View
            style={{
              backgroundColor: props.color,
              width: 52,
              height: 52,
              borderRadius: 7,
            }}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isLikeClicked(!likeClicked)}>
          <Image
            source={heartIcon}
            style={{
              position: 'absolute',
              right: -3,
              bottom: -6,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: widthPercentage(54),
    height: heightPercentage(54),
    marginHorizontal: widthPercentage(10),
  },
  text: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(10),
    color: '#1E3968DE',
    marginTop: heightPercentage(12),
  }
});

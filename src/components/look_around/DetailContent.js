import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function DetailContent() {
  const [likeClicked, isLikeClicked] = React.useState(false);
  const [heartIcon, setHeartIcon] = React.useState(require('../../assets/images/white-heart.png'));

  useEffect(() => {
    if (likeClicked === true) {
      setHeartIcon(require('../../assets/images/red-heart-big.png'));
    } else {
      setHeartIcon(require('../../assets/images/white-heart.png'));
    }
  }, [likeClicked]);

  return (
    <View style={styles.content}>
      <View style={{width: '100%', height: heightPercentage(355)}}>
        <Image
          source={require('../../assets/images/sample-images/photo3.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: widthPercentage(7),
          top: heightPercentage(324)
        }}
        onPress={() => isLikeClicked(!likeClicked)}
      >
        <Image
          source={heartIcon}
          style={{
            width: widthPercentage(29),
            height: heightPercentage(24),
          }}
        />
      </TouchableOpacity>
      <View style={styles.contentBottom}>
        <View style={styles.likeNumView}>
          <Image
            source={require('../../assets/images/heart-vector-big.png')}
          />
          <Text style={styles.likeNum}>382</Text>
        </View>
        <Text style={styles.bottomText}>#포토버블 #스마일</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: widthPercentage(354),
    height: heightPercentage(389),
    marginRight: widthPercentage(16),
    marginLeft: widthPercentage(16),
    backgroundColor: '#FFFFFF63',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF8C',
    alignItems: 'center',
  },
  contentBottom: {
    width: widthPercentage(353),
    borderTopWidth: 1,
    borderColor: '#FFFFFF8C',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(16),
    color: '#1E3968DE',
    marginTop: heightPercentage(7),
  },
  likeNumView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF63',
    width: widthPercentage(60),
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#FFFFFF8C',
    position: 'absolute',
    left: widthPercentage(4),
    top: heightPercentage(4),
  },
  likeNum: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(14),
    color: '#1E396880',
    marginLeft: widthPercentage(8),
    marginBottom: heightPercentage(1),
  }
});

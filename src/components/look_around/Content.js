import React, {useEffect} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function Content(props) {
  const [likeClicked, isLikeClicked] = React.useState(false);
  const [heartIcon, setHeartIcon] = React.useState(require('../../assets/images/white-heart.png'));

  useEffect(() => {
    if (likeClicked === true) {
      setHeartIcon(require('../../assets/images/red-heart.png'));
    } else {
      setHeartIcon(require('../../assets/images/white-heart.png'));
    }
  }, [likeClicked]);

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
        <Image
          source={props.url}
          style={{
            width: widthPercentage(106),
            height: heightPercentage(161),
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: widthPercentage(2),
          top: heightPercentage(135)
        }}
        onPress={() => isLikeClicked(!likeClicked)}
      >
        <Image source={heartIcon}/>
      </TouchableOpacity>
      <View style={styles.contentBottom}>
        <View style={styles.likeNumView}>
          <Image source={require('../../assets/images/heart-vector.png')}/>
          <Text style={styles.likeNum}>{props.like}</Text>
        </View>
        <Text style={styles.bottomText}>{props.hashtag}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: widthPercentage(161),
    height: heightPercentage(179),
    marginRight: widthPercentage(16),
    marginLeft: widthPercentage(16),
    backgroundColor: '#FFFFFF63',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF8C',
    alignItems: 'center',
  },
  contentBottom: {
    width: widthPercentage(160),
    borderTopWidth: 1,
    borderColor: '#FFFFFF8C',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontFamily: 'NanumSquareRoundR',
    fontSize: fontPercentage(8),
    color: '#1E3968DE',
    marginTop: heightPercentage(4),
  },
  likeNumView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF63',
    width: widthPercentage(30),
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#FFFFFF8C',
    position: 'absolute',
    left: widthPercentage(2),
    top: heightPercentage(1),
  },
  likeNum: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(8),
    color: '#1E396880',
    marginLeft: widthPercentage(4),
  }
});

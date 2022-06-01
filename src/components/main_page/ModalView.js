import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

export function ModalView(props) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={props.isReveal}
    >
      <View style={styles.entireView}>
        <View style={styles.modalView}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'NanumSquareRoundB',
                fontSize: 16,
                color: '#1E3968DE',
                paddingTop: 5,
                paddingBottom: 6,
              }}>
              필터를 삭제할까요?
            </Text>
            <Text
              style={{
                fontFamily: 'NanumSquareRoundR',
                fontSize: 12,
                color: '#1E3968DE',
              }}>
              제작한 모든게 다 사라져요.
            </Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.noButton} onPress={() => props.isClose(false)}>
              <Text
                style={{
                  fontFamily: 'NanumSquareRoundB',
                  fontSize: 14,
                  color: '#FF4242'
                }}>
                아니오
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={() => props.isClose(false)}>
              <Text
                style={{
                  fontFamily: 'NanumSquareRoundB',
                  fontSize: 14,
                  color: '#1E3968DE'
                }}>
                예
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  entireView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: "white",
    alignItems: 'center',
    width: 230,
    height: 124,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 7.12,
    shadowOffset: {
      width: 0,
      height: 2.67,
    },
  },
  buttonView: {
    flexDirection: 'row',
    height: 35.43,
    borderTopWidth: 0.33,
    borderColor: '#A6C9FF',
  },
  noButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.33,
    borderColor: '#A6C9FF',
  },
  yesButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

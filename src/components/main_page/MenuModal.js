import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function MenuModal(props) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={props.showMenu}
    >
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => props.setShowMenu(!props.showMenu)}
        activeOpacity={1.0}
      >
        <TouchableWithoutFeedback style={{width: 148, height: 156}}>
          <View style={styles.modalView}>
            <View style={styles.underLine}>
              <TouchableOpacity
                style={styles.eachButton}
                onPress={() => props.setShowMenu(false)}
              >
                <Text style={styles.buttonText}>삭제</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.underLine}>
              <TouchableOpacity
                style={styles.eachButton}
                onPress={() => props.setShowMenu(false)}
              >
                <Text style={styles.buttonText}>SNS 공유</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.lastButton}
                onPress={() => props.setShowMenu(false)}
              >
                <Text style={styles.buttonText}>수정하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    right: widthPercentage(16),
    top: heightPercentage(99),
    backgroundColor: "white",
    alignItems: 'center',
    width: 148,
    height: 156,
    borderWidth: 1,
    borderColor: '#B4D2FF8C',
    borderRadius: 15,
  },
  underLine: {
    borderBottomWidth: 1,
    borderColor: '#A6C9FF8C',
  },
  eachButton: {
    width: 130,
    paddingVertical: 15,
    alignItems: 'center',
  },
  lastButton: {
    width: 130,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'NanumSquareRoundR',
    fontSize: 18,
    color: '#1E3968DE',
  },
});

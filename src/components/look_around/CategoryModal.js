import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../../ResponsiveSize";

export function CategoryModal(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showModal}
    >
      <TouchableOpacity
        style={styles.entireView}
        onPress={() => props.setShowModal(!props.showModal)}
        activeOpacity={1.0}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.sectionView}>
              <Text style={styles.sectionTitle}>
                촬영인원
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>전체</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>1명</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>2명</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>3명</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.sectionView}>
              <Text style={styles.sectionTitle}>
                프레임 종류
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>전체</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>1명</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>2명</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>3명</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>4명</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>5명</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingLeft: widthPercentage(16), paddingTop: heightPercentage(30),}}>
              <Text style={styles.sectionTitle}>
                프레임 컷수
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>전체</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>1컷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>2컷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>4컷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>6컷</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  entireView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: "white",
    flex: 1,
    height: heightPercentage(414),
    borderRadius: 10,
  },
  sectionView: {
    borderBottomWidth: 1,
    borderColor: '#1E396880',
    paddingLeft: widthPercentage(16),
    paddingTop: heightPercentage(30),
    paddingBottom: heightPercentage(30),
  },
  sectionTitle: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(16),
    color: '#1E3968DE',
    marginBottom: heightPercentage(20),
  },
  button: {
    borderWidth: 1,
    borderColor: '#1E396880',
    borderRadius: 10,
    paddingVertical: widthPercentage(3),
    paddingHorizontal: heightPercentage(9),
    marginRight: widthPercentage(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(14),
    color: '#1E3968DE',
  }
});

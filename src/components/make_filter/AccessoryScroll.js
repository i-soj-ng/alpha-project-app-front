import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { Accessory } from "./Accessory";
import { heightPercentage } from "../../../ResponsiveSize";

export function AccessoryScroll() {
  return (
    <View style={{alignItems: 'center'}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.bundle}>
          <Accessory url={require('../../assets/images/3D-accessories/Beige_Fabric.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Black_Rabbit2.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Black_Rabbit3.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Black_Rabbit.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Blue_Fabric.png')}/>
        </View>
        <View style={styles.bundle}>
          <Accessory url={require('../../assets/images/3D-accessories/Gold.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Logo2.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Logo.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Red_Basic.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/Silver.png')}/>
        </View>
        <View style={styles.bundle}>
          <Accessory url={require('../../assets/images/3D-accessories/White_Rabbit2.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/White_Rabbit3.png')}/>
          <Accessory url={require('../../assets/images/3D-accessories/White_Rabbit.png')}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: heightPercentage(238),
    paddingVertical: heightPercentage(20),
  },
  bundle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: heightPercentage(14),
  }
});

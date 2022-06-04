import React from 'react';
import { StyleSheet, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Likes } from "../pages/Likes";
import { LookAround } from "../pages/LookAround";
import { MakeFilter } from "../pages/MakeFilter";
import { MyPage } from "../pages/MyPage";
import { Main } from "../pages/Main";

import { heightPercentage, widthPercentage } from "../../ResponsiveSize";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tab,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name='Home'
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/tab-bar-icons/home.png')}
              style={{
                width: widthPercentage(40),
                height: heightPercentage(40),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='LookAround'
        component={LookAround}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/tab-bar-icons/tab-eye.png')}
              style={{
                width: widthPercentage(40),
                height: heightPercentage(40),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='MakeFilter'
        component={MakeFilter}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/tab-bar-icons/add.png')}
              style={{
                width: widthPercentage(50),
                height: heightPercentage(50),
                position: 'absolute',
                top: widthPercentage(-12),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Likes'
        component={Likes}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/tab-bar-icons/heart.png')}
              style={{
                width: widthPercentage(40),
                height: heightPercentage(40),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='MyPage'
        component={MyPage}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/tab-bar-icons/user.png')}
              style={{
                width: widthPercentage(40),
                height: heightPercentage(40),
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#A6C9FF',
    height: heightPercentage(81),
  }
});

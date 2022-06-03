import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigation } from "../navigations/MainStackNavigation"
import { Likes } from "../pages/Likes";
import { LookAround } from "../pages/LookAround";
import { MakeFilter } from "../pages/MakeFilter";
import { MyPage } from "../pages/MyPage";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Camera' component={MainStackNavigation} />
      <Tab.Screen name='Likes' component={Likes} />
      <Tab.Screen name='LookAround' component={LookAround} />
      <Tab.Screen name='MakeFilter' component={MakeFilter} />
      <Tab.Screen name='MyPage' component={MyPage} />
    </Tab.Navigator>
  );
}

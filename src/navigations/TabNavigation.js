import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Camera } from "../pages/Camera";
import { Likes } from "../pages/Likes";
import { LookAround } from "../pages/LookAround";
import { MakeFilter } from "../pages/MakeFilter";
import { MyPage } from "../pages/MyPage";
import { Main } from "../pages/Main";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Camera' component={Main} />
        <Tab.Screen name='Likes' component={Likes} />
        <Tab.Screen name='LookAround' component={LookAround} />
        <Tab.Screen name='MakeFilter' component={MakeFilter} />
        <Tab.Screen name='MyPage' component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
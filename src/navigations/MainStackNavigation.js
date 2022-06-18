import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";

import { TabNavigation } from "./TabNavigation";
import { MyFilter } from "../pages/MyFilter";
import { QRPop } from "../pages/QRPop";
import { LookAroundDetail } from "../pages/LookAroundDetail";
import { MakeFilter } from "../pages/MakeFilter";
import { MakeAccessory } from "../pages/MakeAccessory";

const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='MainHome' component={TabNavigation} />
      <Stack.Screen name='MyFilter' component={MyFilter} />
      <Stack.Screen name='QRPop' component={QRPop} />
      <Stack.Screen name='LookAroundDetail' component={LookAroundDetail} />
    </Stack.Navigator>
  );
}

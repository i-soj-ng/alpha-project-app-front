import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";

import { TabNavigation } from "./TabNavigation";
import { MyFilter } from "../pages/MyFilter";
import { QRPop } from "../pages/QRPop";

const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='MainHome' component={TabNavigation} />
      <Stack.Screen name='MyFilter' component={MyFilter} />
      <Stack.Screen name='QRPop' component={QRPop} />
    </Stack.Navigator>
  );
}

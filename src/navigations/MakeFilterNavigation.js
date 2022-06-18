import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";

import { MakeFilter } from "../pages/MakeFilter";
import { MakeAccessory } from "../pages/MakeAccessory";
import { MakeFrame } from "../pages/MakeFrame";

const Stack = createStackNavigator();

export function MakeFilterNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='MakeFilter' component={MakeFilter} />
      <Stack.Screen name='MakeAccessory' component={MakeAccessory} />
      <Stack.Screen name='MakeFrame' component={MakeFrame} />
    </Stack.Navigator>
  );
}

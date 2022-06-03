import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigation } from "./TabNavigation";
import { MyFilter } from "../pages/MyFilter";
import { QRPop } from "../pages/QRPop";

const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Main' component={TabNavigation} />
        <Stack.Screen name='MyFilter' component={MyFilter} />
        <Stack.Screen name='QRPop' component={QRPop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Main } from "../pages/Main";
import { MakeFilter } from "../pages/MakeFilter";

const Stack = createStackNavigator();

export function MakeFilterNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='MakeFilter' component={MakeFilter} />
    </Stack.Navigator>
  );
}


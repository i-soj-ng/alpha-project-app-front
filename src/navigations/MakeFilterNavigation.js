import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Main } from "../pages/Main";
import { MakeFilter } from "../pages/MakeFilter";
import { TabNavigation } from "./TabNavigation";

const Stack = createStackNavigator();

export function MakeFilterNavigation({ navigation, route }) {
  route.state && route.state.index === 0
    ? navigation.setOptions({ tabBarVisible: false })
    : navigation.setOptions({ tabBarVisible: true });

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='MF' component={MakeFilter} />
    </Stack.Navigator>
  );
}


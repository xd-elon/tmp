import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/Home';

type RootStackParamList = {
  Home?: undefined;
  Card?: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

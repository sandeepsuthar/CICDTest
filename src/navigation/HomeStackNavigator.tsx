import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from './types';
import {stackOptions} from '../theme/Navigation';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;

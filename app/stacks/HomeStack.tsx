import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParams} from './types';
import {HomeScreen} from '../screens';

// HomeStackNavigator
const HomeStack = createStackNavigator<HomeStackParams>();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

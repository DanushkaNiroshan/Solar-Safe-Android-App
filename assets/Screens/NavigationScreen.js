import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import StartPage from './StartPage';
import HealthPage from './HealthPage';
import ChartPage from './ChartPage';
import ChartPageTwo from './ChartPageTwo';

const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Start' component={StartPage} />
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Health' component={HealthPage} />
        <Stack.Screen name='ChartPage' component={ChartPage} />
        <Stack.Screen name='ChartPageTwo' component={ChartPageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;

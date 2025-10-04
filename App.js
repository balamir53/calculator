import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main Screen from './screens/Main Screen';
import Calculation Screen from './screens/Calculation Screen';
import Result Screen from './screens/Result Screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Screen">
          <Stack.Screen name="Main Screen" component={Main Screen} />
          <Stack.Screen name="Calculation Screen" component={Calculation Screen} />
          <Stack.Screen name="Result Screen" component={Result Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultScreen } from './screens';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Defualt Screen"}
      >
        <Stack.Screen
          name="Defualt Screen"
          component={DefaultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

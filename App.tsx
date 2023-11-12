/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screen/SlashScreen';
import Home from './Screen/Home';
import Login from './Screen/Login';
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import SignUp from './Screen/SignUp';
import PlayGame from './Screen/PlayGame';

const Stack = createNativeStackNavigator();

function App() {

  return (
      <TamaguiProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="/" component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name="back" component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="signup" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="play" component={PlayGame} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </TamaguiProvider>
  );
}

export default App;
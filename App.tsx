/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  Image,
} from 'react-native';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello World</Text>
          <Image
            source={require('./assets/img/logo.png')}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
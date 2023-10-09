// SplashScreen.js

import React from 'react';
import { View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const SplashScreen = () => {
  return (
        <View style={{ flex: 1,width:'100%',height:"100%",justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./../assets/img/logo.png')}
            style={{ width: 200, height: 200 }}/>
        </View>
  );
};

export default SplashScreen;

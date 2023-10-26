import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { PRIMARY_LIGHT } from '../styles';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    // Execute code after 2 seconds
    setTimeout(()=>{
      // Check if 'is_connect' is set in AsyncStorage
      AsyncStorage.getItem('is_connect')
        .then((connect) => {
          try {
            // Parse the value as JSON
            const isConnected = JSON.parse(connect);

            if (isConnected) {
              // User is connected, navigate to the Home screen
              navigation.navigate('home');
            } else {
              // User is not connected, navigate to the Login screen
              navigation.navigate('login');
            }
          } catch (error) {
            // An error occurred while parsing the data, navigate to the Login screen
            navigation.navigate('login');
          }
        })
        .catch((error) => {
          // AsyncStorage getItem failed, navigate to the Login screen
          navigation.navigate('login');
        });
    },2000)
  }, [navigation]);

  return (
    <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:PRIMARY_LIGHT}}>
      <Image
        source={require('./../assets/img/logo.png')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default SplashScreen;

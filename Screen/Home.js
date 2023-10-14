import AsyncStorage from '@react-native-async-storage/async-storage'
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Plus...
import home from './../assets/img/home.png'
import wallet from './../assets/img/wallet.png'
import ticket from './../assets/img/ticket.png'
import profile from './../assets/img/profile.png'
import game from './../assets/img/game.png'

import { useRef, useState } from 'react';
import { PRIMARY } from '../styles';
import HomeContent from './HomeContent';
import { Header } from '../Components/Header';
import { getHeaderTitle } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

export default function Home() {
    const [opacityHome,setOpacityHome] = useState(false);

    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
            
            screenOptions={{
                tabBarShowLabel:false,

                tabBarStyle: { 
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 30,
                        marginHorizontal: 20,
                        height: 60,
                        borderRadius: 50,
                        shadowColor: '#000',
                        shadowOpacity: 0.06,
                        shadowOffset: {
                        width: 10,
                        height: 10
                    },
                    paddingHorizontal: 20,
                },

                header : ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);
                
                    return <Header title={title} style={options.headerStyle}/>;
                  },
                headerStyle:{
                    backgroundColor:'red',
                }
                
            }}>
  
          {
            // Tab Screens....
            // Tab ICons....
          }
          <Tab.Screen name={"Ticket"} component={HomeScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
                <Image source={ticket} style={{width:20,height:20}}/>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
  
          <Tab.Screen name={"Game"} component={SearchScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
                <Image source={game} style={{width:20,height:20}}/>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
          {
            // Extra Tab Screen For Action Button..
          }
  
          <Tab.Screen name={"Home"} component={HomeContent}  options={{
            tabBarIcon: ({ focused }) => (
  
                <View style={{
                  width: 55,
                  height: 55,
                  backgroundColor: PRIMARY,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: Platform.OS == "android" ? 50 : 30,
                  opacity:opacityHome?0.9:1
                }} onPress={()=>console.warn("press")}>
                  <Image source={home} style={{
                    width: 22,
                    height: 22,
                    tintColor: 'white',
                  }}></Image>
                </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
                setOpacityHome(true)
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true
              }).start();
              setTimeout(()=>{
                setOpacityHome(false)
              },10)
            }
          })}></Tab.Screen>
  
          <Tab.Screen name={"Wallet"} component={NotificationScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
                <Image source={wallet} style={{width:20,height:20}}/>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
  
          <Tab.Screen name={"Profile"} component={SettingsScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
                <Image source={profile} style={{width:20,height:20}}/>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
  
        </Tab.Navigator>
  
        <Animated.View style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: PRIMARY,
          position: 'absolute',
          bottom: 88,
          left: 50,
          borderRadius: 20,
          transform: [
            { translateX: tabOffsetValue }
          ]
        }}>
  
        </Animated.View>
      </NavigationContainer>
    );
  }
  
  function getWidth() {
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 80
  
    // Total five Tabs...
    return width / 5
  }
  
  function EmptyScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Empty</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function NotificationScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }
  
  function SearchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
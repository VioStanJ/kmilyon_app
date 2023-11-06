import AsyncStorage from '@react-native-async-storage/async-storage'
import { Animated, Dimensions, Image, Platform, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Plus...
import home from './../assets/img/home.png'
import wallet from './../assets/img/wallet.png'
import ticket from './../assets/img/ticket.png'
import profile from './../assets/img/profile.png'
import game from './../assets/img/game.png'

import { useEffect, useRef, useState } from 'react';
import { PRIMARY } from '../styles';
import HomeContent from './HomeContent';
import { Header } from '../Components/Header';
import Ticket from './Ticket';
import Game from './Game';
import Wallet from './Wallet';
import Profile from './Profile';
import axios from './../axiosInterceptor';

const Tab = createBottomTabNavigator();

export default Home = ({ navigation }) => {
  // State
  const [title,setTitle] = useState('Welcome');
  const [opacityHome,setOpacityHome] = useState(false);
  const [user,setUser] = useState({id:0,email:""});
  const [userProfile,setUserProfile] = useState({code:'',firstname:'',lastname:'',avatar:null,is_verified:false,sex:'',phone:''})
  const [account,setAccount] = useState({user: 25,point: 0,point_bonus: 0,active: false,status: true})

  //  Init User Data

  const initUser = async () => {
      AsyncStorage.getItem('profile').then((profile)=>{
        if(profile != null){
          setUserProfile(JSON.parse(profile));
        }
      });
      AsyncStorage.getItem('account').then((account)=>{
        if(profile != null){
          setAccount(JSON.parse(account));
        }
      });
  }

  // Fucntions Get Data From Server
  const fetchProfile = async () => {

    axios.get('/profile').then((response)=>{
      if(response.data.success){
        
        AsyncStorage.setItem('user',JSON.stringify(response.data.user));
        setUser(response.data.user);
        AsyncStorage.setItem('profile',JSON.stringify(response.data.profile));
        setUserProfile(response.data.profile);
        AsyncStorage.setItem('account',JSON.stringify(response.data.account));
        setAccount(response.data.account);

      }
    }).catch((error)=>{
      console.warn("ERR",error);
    })

  }

  // Effect
  useEffect(() => {

    // initUser();

    fetchProfile();

    Animated.spring(tabOffsetValue, {
      toValue: getWidth() * 2,
      useNativeDriver: true
    }).start();
      setTimeout(()=>{
        setOpacityHome(false)
    },10)
  }, []);

    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
      <>
        {/* Header */}
        <Header title={title} style={{backgroundColor:'red',}} user={userProfile} />
        {/* <Button >GET USER</Button> */}
        <Tab.Navigator
            initialRouteName={'HomeContent'}
            screenOptions={{
                headerShown:false,
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
                        height: 10,
                    },
                    paddingHorizontal: 20,
                },
            }}>
  
          {
            // Tab Screens....
            // Tab ICons....
          }
          <Tab.Screen name={"Ticket"} component={Ticket} options={{
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
              setTitle('Ticket')
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
  
          <Tab.Screen name={"Game"} component={Game} options={{
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
              setTitle('Game')
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
          {
            // Extra Tab Screen For Action Button..
          }
  
          <Tab.Screen name={"HomeContent"} component={HomeContent}  options={{
            tabBarIcon: ({ focused }) => (
  
                <View style={{
                  width: 55,
                  height: 55,
                  backgroundColor: PRIMARY,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: Platform.OS == "android" ? 50 : 30,
                  opacity:opacityHome?0.9:1,
                  zIndex:9999999
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
                setTitle('Welcome')
                initUser()

              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true
              }).start();
              setTimeout(()=>{
                setOpacityHome(false)
              },10)
            }
          })}></Tab.Screen>
  
          <Tab.Screen name={"Wallet"} component={Wallet} options={{
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
              setTitle('Wallet')
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
  
          <Tab.Screen name={"Profile"} component={Profile} options={{
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
              setTitle('Profile')
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
          zIndex:99999,
          transform: [
            { translateX: tabOffsetValue }
          ]
        }}>
  
        </Animated.View>
      </>
    );
  }
  
  function getWidth() {
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 80
  
    // Total five Tabs...
    return width / 5
  }

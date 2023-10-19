import React, { useEffect, useState } from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import axios from './../axiosInterceptor';

const HomeContent = ({ navigation }) => {

    const [games,setGames] = useState([]);

    // Get Games

    axios.get('/games').then((response)=>{
        if(response.data.success){
          // console.warn(response.data.user.avatar,'DATA');
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

    useEffect(()=>{

    },[])
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Home Content</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeContent;
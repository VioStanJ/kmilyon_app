import React, { useEffect, useState } from 'react'
import { SafeAreaView,ScrollView,View,Text, ActivityIndicator } from 'react-native'
import Container from '../Components/Container';
import { Header } from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlayGame = ({ route,navigation }) => {

    const [loaded,setLoad] = useState(false);
    const [profile,setUserProfile] = useState({code:'',firstname:'',lastname:'',avatar:null,is_verified:false,sex:'',phone:''})

    //  Init User Data for Offline
    function init(){
        AsyncStorage.getItem('profile').then((profile)=>{
            if(profile != null){
                setUserProfile(JSON.parse(profile));
            }
        });
    }

    useEffect(()=>{
        init();
        setTimeout(()=>{
            setLoad(true)
        },600)
    },[])

    return (
        loaded?
        <Container>
            <ScrollView>
                <View>
                    <Header title="Game Play"  user={profile} />

                </View>
            </ScrollView>
        </Container>
        :
        <ActivityIndicator size="small" color="#0000ff" />
    )
}

export default PlayGame;
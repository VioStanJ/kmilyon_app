import React, { useEffect, useState } from 'react'
import { SafeAreaView,ScrollView,View,Image, ActivityIndicator } from 'react-native'
import Container from '../Components/Container';
import { Header } from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RandomGame from '../Components/RandomGame';
import { HOST, MEDIA } from '../const';
import { H2, H5, Spacer } from 'tamagui';
import { H4 } from 'tamagui';

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

    const getGame = (game) => {
        
        switch (game.code) {
            case "DBL_WIN":
                return <RandomGame game={game} />
            // case ""
            default:
                return <RandomGame game={game} />
        }
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

                    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <View style={{alignSelf:'center',backgroundColor:'white',elevation:6,width:90,height:80,padding:5,borderRadius:6,position:'relative'}}>
                            <Image source={{uri:HOST+MEDIA+route.params.game.image}} style={{width:70,height:70}}/>
                        </View>
                        <Spacer />
                        <H4>{route.params.game.title}</H4>
                    </View>
                    {getGame(route.params.game)}
                </View>
            </ScrollView>
        </Container>
        :
        <ActivityIndicator size="small" color="#0000ff" />
    )
}

export default PlayGame;
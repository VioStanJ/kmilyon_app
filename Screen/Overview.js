import React, { useEffect, useState } from 'react'
import { SafeAreaView,ScrollView,View,Image, ActivityIndicator, useWindowDimensions } from 'react-native'
import Container from '../Components/Container';
import { Header } from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RandomGame from '../Components/RandomGame';
import { HOST, MEDIA } from '../const';
import { Button, H2, H3, H5, Separator, Spacer } from 'tamagui';
import { H4 } from 'tamagui';
import { Text } from 'tamagui';
import RenderHtml from 'react-native-render-html';
import { SECONDARY } from '../styles';

const Overview = ({ route,navigation }) => {

    const [loaded,setLoad] = useState(false);
    const [profile,setUserProfile] = useState({code:'',firstname:'',lastname:'',avatar:null,is_verified:false,sex:'',phone:''})
    const { width } = useWindowDimensions();

    //  Init User Data for Offline
    function init(){
        AsyncStorage.getItem('profile').then((profile)=>{
            if(profile != null){
                setUserProfile(JSON.parse(profile));
            }
        });
    }

    function play(){
        navigation.navigate('play',{"game":route.params.game})
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
                    <Header title="Overview"  user={profile} />

                    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:30}}>
                        <View style={{alignSelf:'center',backgroundColor:'white',elevation:6,width:90,height:80,padding:5,borderRadius:6,position:'relative'}}>
                            <Image source={{uri:HOST+MEDIA+route.params.game.image}} style={{width:70,height:70}}/>
                        </View>
                        <Spacer/>
                        <H3>{route.params.game.title}</H3>

                        <View style={{width:'100%',paddingLeft:20,paddingRight:20,marginBottom:120}}>
                            <RenderHtml contentWidth={width}
                                source={{html: route.params.game.description}}/>
                        </View>

                        <Separator alignSelf="stretch" />
                    </View>
                </View>
            </ScrollView>
            <Button size="$4" theme="active" color={'white'} 
                            backgroundColor={SECONDARY}
                            style={{fontWeight:'bolder',alignSelf:'center',width:200,position:'absolute',bottom:20}}
                                    onPress={play}>PLAY</Button>
        </Container>
        :
        <ActivityIndicator size="small" color="#0000ff" />
    )
}

export default Overview;
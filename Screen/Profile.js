import React, { useEffect, useState } from 'react'
import { SafeAreaView,ScrollView,View,Text, ActivityIndicator } from 'react-native'
import Container from '../Components/Container';
import Content from '../Components/Content';
import { Button, H4, H5, H6, Image, Separator, Spacer } from 'tamagui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { HOST, MEDIA } from '../const';
import userDefault from './../assets/img/user.png'
import { styles } from '../styles';
import Option from '../Components/Option';
import phone from './../assets/img/phone.png'
import transactions from './../assets/img/transactions.png';
import help from './../assets/img/help.png';
import terms from './../assets/img/terms.png';

const Profile = () => {
    const navigation = useNavigation();

    const [loaded,setLoad] = useState(false);
    const [user,setUser] = useState({id:0,email:""});
    const [profile,setUserProfile] = useState({code:'',firstname:'',lastname:'',avatar:null,is_verified:false,sex:'',phone:''})
  
    const signOut = () => {
        try {
            AsyncStorage.setItem('is_connect','false');
            AsyncStorage.setItem('access_token','');
            AsyncStorage.setItem('refresh_token','');
            AsyncStorage.setItem('user','');
            AsyncStorage.setItem('profile','');
            AsyncStorage.setItem('account','');
            navigation.navigate('login')
        } catch (error) {
            console.warn('Fail to disconnect',error);
        }
    }

    function init(){
        AsyncStorage.getItem('profile').then((profile)=>{
            if(profile != null){
                setUserProfile(JSON.parse(profile));
            }
        });

        AsyncStorage.getItem('user').then((user)=>{
            if(user!=null){
                setUser(JSON.parse(user));
            }
        });
    }

    function goto(code){
        console.log("CODE",code);
    }
    
    useEffect(()=>{
        init();
        setTimeout(()=>{
            setLoad(true)
        },600)
    },[])

    return (
        loaded?
        <Content>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingBottom:120}}>
    
                <Image source={profile.avatar!=null?{uri:HOST+MEDIA+profile.avatar}:userDefault} style={{height:120,width:120,borderWidth:1,borderColor:'gray',marginBottom:6,borderRadius:100,}}/>

                <H4>{profile.firstname} {profile.lastname}</H4>
                <H6>{user.email}</H6>
                <H6>{profile.phone}</H6>

                <Spacer />

                <Option title={"Change Phone Number"} icon={phone} code={"PHONE"} onPress={goto}/>
                <Separator alignSelf="stretch" />

                <Option title={"Transactions"} icon={transactions} code={"TRANS"} onPress={goto}/>
                <Separator alignSelf="stretch" />

                <Option title={"Terms and Conditions"} icon={terms} code={"TERMS"} onPress={goto}/>
                <Separator alignSelf="stretch" />

                <Option title={"Help"} icon={help} code={"HELP"} onPress={goto}/>
                <Separator alignSelf="stretch" />

                <Spacer />
                <Spacer />

                <Button color={'white'} backgroundColor={'$color.red11Dark'} onPress={signOut}>Sign Out</Button>
            </View>
        </Content>
        :
        <ActivityIndicator size="small" color="#0000ff" />

    )
}

export default Profile;
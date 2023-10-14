import React from 'react'
import { H3, H4, H6, Image, View } from 'tamagui'
import user from './../assets/img/user.png'
import notif from './../assets/img/notification.png'
import actif from './../assets/img/notification_active.png'
import { Text } from 'react-native'

export const Header = (props) => {
    console.warn('USER',props.user);
    return (
        <View style={{backgroundColor:'transparent',height:70,flexDirection:'row',justifyContent:'space-between',marginTop:30,paddingLeft:20,paddingRight:20,marginBottom:20}}>
            <View style={{}}>
                <H4 style={{position:'relative',top:2}}>{props.title??'Welcome'}</H4>
                <Image source={actif} style={{height:30,width:30,position:'relative',top:-4}}/>
            </View>
            <View style={{flexDirection:'row',flexBasis:'49%',justifyContent:'flex-end'}}>
                {
                    props.user?
                    <View style={{alignItems:'flex-end',}}>
                        <H4 style={{position:'relative',top:2}}>Ey, {props.user.firstname} {props.user.lastname} !</H4>
                        <H6 style={{fontWeight:'bold',position:'relative',top:-4}}># {props.user.code}</H6>
                    </View>
                    :null
                }
                <Image source={user} style={{height:45,width:45,marginTop:6,marginLeft:8}}/>
            </View>
        </View>
    ) 
}
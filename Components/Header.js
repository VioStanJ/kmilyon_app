import React from 'react'
import { H3, Image, View } from 'tamagui'
import user from './../assets/img/user.png'
import notif from './../assets/img/notification.png'
import actif from './../assets/img/notification_active.png'
import { Text } from 'react-native'

export const Header = (props) => {
    return (
        <View style={[props.style,{flex:1,width:'100%',flexDirection:'row',padding:20}]}>
            <View style={{background:'red'}}>
                <Text>Home Content</Text>
                <Image source={notif} style={{height:30,width:30}}/>
            </View>
        </View>
    ) 
}
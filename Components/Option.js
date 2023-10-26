import React from 'react'
import { View,TouchableOpacity } from 'react-native'
import { Image, Text } from 'tamagui'
import chevron from './../assets/img/chevron.png';
import { PRIMARY_DARK } from '../styles';

export default Option = ({title,code,icon,onPress}) => {
    return (
        <>
        <TouchableOpacity activeOpacity={0.6} onPress={()=>onPress(code)}
            style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10,
            width:'100%'}}>
            <View style={{flexDirection:'row',marginLeft:20}}>
                <Image source={icon} style={{width:25,height:25}}/>
                <Text style={{fontSize:16,marginLeft:10,color:PRIMARY_DARK,fontWeight:'400'}}>{title}</Text>
            </View>
            <Image source={chevron} style={{width:20,height:20,marginRight:5}}/>
        </TouchableOpacity>
        </>
    )
}
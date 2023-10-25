import React from 'react'
import { SafeAreaView,ScrollView,View,ImageBackground, TouchableOpacity } from 'react-native'
import {StyleSheet,} from 'react-native';
import { BACKGROUND, PRIMARY, PRIMARY_DARK, SECONDARY } from '../styles';
import { H6, Image } from 'tamagui';

export default TopUp = ({title,image,onPress}) => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{elevation:6,padding:10}}>
            <View style={{width:100,height:130,borderColor:PRIMARY_DARK,backgroundColor:BACKGROUND,padding:10,alignItems:'center',borderRadius:8,elevation:6}}>
                <Image source={image} style={{width:60,height:60}}/>
                <H6 style>{title}</H6>
            </View>
        </TouchableOpacity>
    )
}
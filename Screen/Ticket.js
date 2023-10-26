import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import {H5, Image, Spacer } from 'tamagui';
import nodata from './../assets/img/nodata.png'

export default Ticket = ({props}) => {
    const [loaded,setLoad] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setLoad(true)
        },600)
    },[])

    return (
        loaded?
        <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
            <View style={{alignItems:'center'}}>
                <Image source={nodata} style={{width:200,height:100,marginTop:-80}}/>
                <Spacer/>
                <H5>No Ticket Yet !</H5>
            </View>
        </View>
        :
        <ActivityIndicator size="small" color="#0000ff" />

    )
}
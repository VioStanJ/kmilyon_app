import React from 'react'
import { View,Text } from 'react-native'
import { Button, H4, Image, Spacer } from 'tamagui';
import game from './../assets/img/logo.png'
import { PRIMARY, PRIMARY_DARK, SECONDARY } from '../styles';
import { HOST, MEDIA } from '../const';

const GameCard = ({ game,is_new }) => {
    return (
        <View style={{backgroundColor:'white',marginTop:50,borderRadius:8,elevation:2,padding:20,marginBottom:10}}>
            <View style={{alignSelf:'center',backgroundColor:'white',elevation:6,width:90,height:80,padding:5,borderRadius:6,position:'relative',top:-50}}>
                <Image source={{uri:HOST+MEDIA+game.image}} style={{width:'100%',height:"100%"}}/>
            </View>
            <View style={{flex:1,marginTop:-70,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                {
                    game.category?
                        <Text style={{backgroundColor:game.category.color,paddingLeft:5,paddingRight:5,color:'white',fontWeight:'bold'}}>{game.category.code}</Text>
                    :null
                }
                {
                    is_new ?
                        <Text style={{backgroundColor:'red',paddingLeft:5,paddingRight:5,color:'white',fontWeight:'bold'}}>NEW</Text>
                    :null

                }
            </View>
            <View style={{flexDirection:'column',paddingTop:5,justifyContent:'start',alignItems:'flex-start'}}>
                <H4 style={{textTransform:'uppercase'}}>{game.title}</H4>
                <Text style={{color:'gray'}}>{game.mini_description}</Text>

                <Spacer/>
                <Button size="$4" theme="active" color={'white'} 
                    backgroundColor={SECONDARY}
                    style={{fontWeight:'bolder',alignSelf:'center',width:200}}
                            >PLAY</Button>

            </View>
        </View>
    )
}

export default GameCard;
import React, { useEffect, useState } from 'react'
import { View,Text,Image,Dimensions, TouchableOpacity } from 'react-native'
import axios from './../axiosInterceptor';
import Content from '../Components/Content';
import { HOST, MEDIA, getWidth } from '../const';
import ImageSlider from 'react-native-image-slider';
import { H5, H6 } from 'tamagui';
import GameCard from '../Components/GameCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import secure from './../assets/img/secure.png';
import {styles} from './../styles'

const HomeContent = ({ navigation }) => {

    const [trends,setTrends] = useState([]);
    const [images,setImages] = useState([]);
    const [account,setAccount] = useState({user: 0,point: 0,point_bonus: 0,active: false,status: true})

    // Get Games

    const init = async () => {
        try {
            AsyncStorage.getItem('trends').then((strends)=>{
                setTrends(JSON.parse(strends))
            })
    
            AsyncStorage.getItem('pubs').then((simg)=>{
                setImages(JSON.parse(simg))
            })

            AsyncStorage.getItem('account').then((saccount)=>{
                console.warn("SACC",JSON.parse(saccount));
                setAccount(JSON.parse(saccount))
            })
        } catch (error) {
            
        }
    }

    const getHome = async () => {
        
        axios.get('/home').then((response)=>{

            if(response.data.success){
                setTrends(response.data.trends)
                AsyncStorage.setItem('trends',JSON.stringify(response.data.trends))
                let imgs = [];
                response.data.pubs.map(element => {
                    imgs.push(HOST+MEDIA+element.image)
                });
                AsyncStorage.setItem('pubs',JSON.stringify(imgs))
                setImages(imgs);
            }
          }).catch((error)=>{
            console.warn("ERR",error);
          })
    }

    useEffect(()=>{
        init();
        getHome();
    },[]);

    return (
        <Content>
            <View style={{padding:0,marginLeft:-3,marginRight:-1,height:210}}>   
                <ImageSlider 
                    images={images}
                    autoPlayWithInterval={3000}
                    /> 
            </View>

            <View style={{padding:20,flexDirection:'column',marginBottom:100}}>
                <H6 style={{alignSelf:'center'}}>Trends now</H6>

                {
                    trends?
                        trends.map((item,index)=>{
                            return <GameCard game={item} is_new={true} key={index} />;
                        })
                    :null
                }

                {
                    !account.active?
                        <TouchableOpacity onPress={()=>navigation.navigate('Wallet')}>
                            <View style={[styles.card,{flexDirection:'row'}]}>
                                <Image source={secure} style={{width:40,height:40}}/>
                                <View style={{marginLeft:10}}>
                                    <H5 style={{fontWeight:'bold'}}>PIN REQUIRED</H5>
                                    <Text>Please set up a PIN for your Account !</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    :null
                }
            </View>

        </Content>
    )
}

export default HomeContent;
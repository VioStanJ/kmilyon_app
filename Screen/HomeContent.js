import React, { useEffect, useState } from 'react'
import { View,Text,Image,Dimensions } from 'react-native'
import axios from './../axiosInterceptor';
import Content from '../Components/Content';
import { HOST, MEDIA, getWidth } from '../const';
import ImageSlider from 'react-native-image-slider';
import { H6 } from 'tamagui';
import GameCard from '../Components/GameCard';

const HomeContent = ({ navigation }) => {

    const [trends,setTrends] = useState([]);
    const [images,setImages] = useState([]);
    // Get Games

    const getHome = async () => {
        
        axios.get('/home').then((response)=>{

            // if(response.data.success){
                setTrends(response.data.trends)
                let imgs = [];
                response.data.pubs.map(element => {
                    imgs.push(HOST+MEDIA+element.image)
                });
                setImages(imgs);
            // }
          }).catch((error)=>{
            console.warn("ERR",error);
          })
    }

    useEffect(()=>{
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
                    trends.map((item,index)=>{
                        return <GameCard game={item} is_new={true}/>;
                    })
                }

            </View>

        </Content>
    )
}

export default HomeContent;
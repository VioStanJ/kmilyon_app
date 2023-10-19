import React, { useEffect, useState } from 'react'
import { View,Text,Image,Dimensions } from 'react-native'
import axios from './../axiosInterceptor';
import Content from '../Components/Content';
import { HOST, MEDIA, getWidth } from '../const';
import CarouselCards from '../Components/CarouselCards';
import ImageSlider from 'react-native-image-slider';

const HomeContent = ({ navigation }) => {

    const [pubs,setPubs] = useState([]);
    const [trends,setTrends] = useState([]);
    const [images,setImages] = useState([]);
    const [index, setIndex] = React.useState(0)
    // Get Games

    const getHome = async () => {
        
        axios.get('/home').then((response)=>{
            console.warn(response.data.pubs,'HOME');

            // if(response.data.success){
                setTrends(response.data.trends)
                setPubs(response.data.pubs)
                let imgs = [];
                response.data.pubs.map(element => {
                    console.warn("IMAGES",`${HOST+MEDIA+element.image}`);

                    imgs.push(HOST+MEDIA+element.image)
                });
                setImages(imgs);
            // }
          }).catch((error)=>{
            console.warn("ERR",error);
          })
    }

    useEffect(()=>{
        console.warn("ALARM");
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

        </Content>
    )
}

export default HomeContent;
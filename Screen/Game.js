import React,{useState,useEffect} from 'react'
import { SafeAreaView,ScrollView,View,Text,ActivityIndicator } from 'react-native'
import Container from '../Components/Container';
import Content from '../Components/Content';
import { H3 } from 'tamagui';
import axios from './../axiosInterceptor';

const Game = ({ navigation }) => {

    const [loaded,setLoad] = useState(false);

    function init(){
        
    }

    function getCategories() {
        axios.get("/games/by/category").then((response)=>{
            console.warn(response.data);
        }).catch((error)=>{
            console.warn(error);
        })
    }

    useEffect(()=>{
        init();
        getCategories();
        setLoad(true)
    },[]);

    return (
        loaded?
            <Content>
                <View style={{padding:20}}>
                    <H3> Categories</H3>
                    
                </View>
            </Content>
        :<ActivityIndicator size="small" color="#0000ff" />
    )
}

export default Game;
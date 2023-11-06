import React,{useState,useEffect} from 'react'
import { SafeAreaView,ScrollView,View,Text,ActivityIndicator,FlatList } from 'react-native'
import Container from '../Components/Container';
import Content from '../Components/Content';
import { H3 } from 'tamagui';
import axios from './../axiosInterceptor';
import Category from '../Components/Category';
import GameCard from '../Components/GameCard';

const Game = ({ navigation }) => {

    const [loaded,setLoad] = useState(false);
    const [code,setCode] = useState("");
    const [games,setGames] = useState([]);
    const [categories,setCategories] = useState([])

    function init(){
        
    }

    function getCategories() {
        axios.get("/games/by/category").then((response)=>{

            if(response.data.success){
                let cats = response.data.categories;
                if(cats.length>0){
                    setCode(cats[0].code)
                    setGames(cats[0].games)
                }
                setCategories(cats)
            }
        }).catch((error)=>{
            console.warn(error);
        })
    }

    function showGame(category) {
        setCode(category.code)
        setGames(category.games)
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
                    <View style={{marginTop:10}}>

                        <FlatList
                            horizontal={true}
                            data={categories}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <Category item={item} onPress={()=>showGame(item)} code={code}/>}
                            />

                        {
                            games?
                                games.map((item,index)=>{
                                    return <GameCard game={item} is_new={true} key={index} />;
                                })
                            :null
                        }
                    </View>
                </View>
            </Content>
        :<ActivityIndicator size="small" color="#0000ff" />
    )
}

export default Game;
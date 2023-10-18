import React, { useEffect, useState } from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import axios from './../axiosInterceptor';

const HomeContent = ({ navigation }) => {

    const [games,setGames] = useState([]);

    // Get Games


    useEffect(()=>{

    },[])
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Home Content</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeContent;
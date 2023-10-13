import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'

const Home = () => {
    try {
        AsyncStorage.setItem('is_connect',"false")
    } catch (error) {
        
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
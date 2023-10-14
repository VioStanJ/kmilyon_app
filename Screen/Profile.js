import React from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import Container from '../Components/Container';
import Content from '../Components/Content';
import { Button } from 'tamagui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './SlashScreen';
import { useNavigation } from '@react-navigation/core';

const Profile = () => {
    const navigation = useNavigation();

    const signOut = () => {
        try {
            AsyncStorage.setItem('is_connect','false');
            AsyncStorage.setItem('access_token','');
            AsyncStorage.setItem('refresh_token','');
            navigation.navigate('signin')
        } catch (error) {
            console.warn('Fail to disconnect',error);
        }
    }
    return (
        <Content>
            <View>
                <Text>Profile</Text>
                <Button color={'white'} backgroundColor={'$color.red11Dark'} onPress={signOut}>Sign Out</Button>
            </View>
        </Content>
    )
}

export default Profile;
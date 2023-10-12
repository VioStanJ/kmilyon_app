import React,{useState} from 'react'
import { View,TouchableOpacity } from 'react-native'
import { Button, Text } from 'tamagui'
import { Input, Spacer, VisuallyHidden } from 'tamagui'
import { Label } from 'tamagui'
import { H1, H2, H3, H4, H5, H6, Heading } from 'tamagui'
import Container from '../Components/Container'
import axios from 'axios'
import {URL} from '../const'
import { ScrollView } from 'tamagui'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function signIn() {

        console.warn("URL",URL+'/token/');

        axios.post(URL+'/token/',{email,password})
            .then((response)=>{
                if(response.status === 200){
                    try {
                        AsyncStorage.setItem('access_token',JSON.stringify(response.data.access));
                        AsyncStorage.setItem('refresh_token',JSON.stringify(response.data.refresh));
                        AsyncStorage.setItem('is_connect',"true");
                        navigation.navigate('home');
                    } catch (error) {
                        
                    }
                }else{

                }
                // console.warn(response);
            }).catch((error)=>{
                console.warn("error",error);
            })
    }

    return (
        <Container>
            <ScrollView style={{marginTop:20}}>
                <View style={{flex:1}}>
                    <H4>Welcome, please</H4>
                    <H2>Log In !</H2>
                </View>

                <View style={{flex:4,paddingLeft:20,paddingRight:20,height:'100%',flex:1,flexGrow:1,justifyContent:'center'}}>
                    <Label htmlFor="name">Email</Label>
                    <Input  value={email} onChangeText={(e)=>setEmail(e)}/>

                    <Spacer/>

                    <Label htmlFor="name">Password</Label>
                    <Input  secureTextEntry value={password} onChangeText={(e)=>setPassword(e)}/>

                    <Spacer/>

                    <TouchableOpacity>
                        <Text>Forgot your Password ?</Text>
                    </TouchableOpacity>

                    <Spacer/>

                    <Button size="$3" theme="active" color={'$color.blue10Light'}
                        onPress={signIn}>Sign In</Button>

                    <Spacer/>

                </View>

                <View style={{flex:1,alignContent:'center',justifyContent:'center',flexDirection:'row',marginTop:30}}>
                    <Text>Don't have an Account ? </Text>
                    <TouchableOpacity onPressOut={()=>navigation.navigate('signup')}>
                        <Text> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    )
}

export default Login;
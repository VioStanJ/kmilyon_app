import React,{useState} from 'react'
import { View,TouchableOpacity,StyleSheet, ImageBackground,ToastAndroid } from 'react-native'
import { Button, Text, YStack } from 'tamagui'
import { Input, Spacer, VisuallyHidden } from 'tamagui'
import { Label } from 'tamagui'
import { H1, H2, H3, H4, H5, H6, Heading } from 'tamagui'
import Container from '../Components/Container'
import axios from 'axios'
import {URL} from '../const'
import { ScrollView } from 'tamagui'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {PRIMARY_DARK, styles} from './../styles'
import bout from './../assets/img/bout.png';
import Loading from '../Components/Loading'
import RNRestart from 'react-native-restart';

const Login = ({ navigation }) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [open,openModal] = useState(false)
    

    function signIn() {

        openModal(true)
        axios.post(URL+'/token/',{email,password})
            .then((response)=>{
                if(response.status === 200){
                    try {
                        AsyncStorage.setItem('access_token',JSON.stringify(response.data.access));
                        AsyncStorage.setItem('refresh_token',JSON.stringify(response.data.refresh));
                        AsyncStorage.setItem('is_connect',"true");
                        setTimeout(()=>{
                            openModal(false)
                            RNRestart.restart();
                        },1000);
                    } catch (error) {
                        openModal(false)
                    }
                }else{
                    openModal(false)
                }
                
                try {
                    ToastAndroid.show(response.data.message,ToastAndroid.SHORT)
                } catch (error) {}
            }).catch((error)=>{
                openModal(false)
                console.warn("error",error);
            })
    }

    return (
        <Container>
            <ScrollView>
                <ImageBackground source={bout} resizeMode='contain' 
                    style={{flex:1,justifyContent:'flex-end',
                            alignSelf:'flex-start',height:260,
                            width:'80%'}}>
                    
                    <View style={{position:'relative',top:-80,marginLeft:20}}>
                        <H4 style={{color:'white'}}>Welcome, please</H4>
                        <H2 style={{color:'white'}}>Log In !</H2>
                    </View>
                </ImageBackground>

                <View style={{flex:4,paddingLeft:20,paddingRight:20,height:'100%',flex:1,flexGrow:1,justifyContent:'center'}}>
                    <Label htmlFor="name" style={styles.text}>Email</Label>
                    <Input  value={email} onChangeText={(e)=>setEmail(e)} style={styles.input}
                        placeholder='example@email.com'/>

                    <Spacer/>

                    <Label htmlFor="name" style={styles.text}>Password</Label>
                    <Input  secureTextEntry value={password} onChangeText={(e)=>setPassword(e)}
                        style={styles.input} placeholder='********'/>

                    <Spacer/>

                    <TouchableOpacity>
                        <Text  style={styles.link}>Forgot your Password ?</Text>
                    </TouchableOpacity>

                    <Spacer/>

                    <YStack>
                        <Button size="$3" theme="active" color={'white'} backgroundColor={PRIMARY_DARK}
                            onPress={signIn}>Sign In</Button>
                        </YStack>

                    <Spacer/>

                </View>

                <View style={{flex:1,alignContent:'center',justifyContent:'center',flexDirection:'row',marginTop:30}}>
                    <Text style={styles.text}>Don't have an Account ? </Text>
                    <TouchableOpacity onPressOut={()=>navigation.navigate('signup')}>
                        <Text style={styles.link}> Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <Loading open={open} close={()=>openModal(false)} />
            </ScrollView>
        </Container>
    )
}



export default Login;
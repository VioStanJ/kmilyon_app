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

const Login = ({ navigation }) => {

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password_confirmation,setPasswordConfirmation] = useState('');
    const [birthday,setBirthday] = useState('');
    
    const [open,openModal] = useState(false)

    function signUp() {
        openModal(true)

        axios.post(URL+'/signup/',{firstname,lastname,email,password,password_confirmation,birthday})
            .then((response)=>{
                if(response.data.success){
                    navigation.navigate('login');
                }

                try {
                    ToastAndroid.show(response.data.message,ToastAndroid.SHORT)
                } catch (error) {}
                
                openModal(false)
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
                        <H4 style={{color:'white'}}>Hello,</H4>
                        <H2 style={{color:'white'}}>Sign Up !</H2>
                    </View>
                </ImageBackground>

                <View style={{flex:4,paddingLeft:20,paddingRight:20,height:'100%',flex:1,flexGrow:1,justifyContent:'center'}}>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                        <View style={{flexBasis:'49%'}}>
                            <Label htmlFor="firstname" style={styles.text}>Firstname</Label>
                            <Input  value={firstname} onChangeText={(e)=>setFirstname(e)} style={styles.input}
                                placeholder='Jhon'/>
                        </View>
                        

                        <View style={{flexBasis:'49%'}}>
                            <Label htmlFor="lastname" style={styles.text}>Lastname</Label>
                            <Input  value={lastname} onChangeText={(e)=>setLastname(e)} style={styles.input}
                                placeholder='Doe'/>
                        </View>

                    </View>

                    <Spacer/>

                    <Label htmlFor="name" style={styles.text}>Email</Label>
                    <Input  value={email} onChangeText={(e)=>setEmail(e)} style={styles.input}
                         placeholder='example@email.com'/>

                    <Spacer/>

                    <Label htmlFor="name" style={styles.text}>Password</Label>
                    <Input  secureTextEntry value={password} onChangeText={(e)=>setPassword(e)}
                        style={styles.input} placeholder='********'/>

                    <Spacer/>

                    <Label htmlFor="name" style={styles.text}>Password Confirmation</Label>
                    <Input  secureTextEntry value={password_confirmation} onChangeText={(e)=>setPasswordConfirmation(e)}
                        style={styles.input} placeholder='********'/>

                    <Spacer/>

                    <Label htmlFor="name" style={styles.text}>Birthday</Label>
                    <Input  value={birthday} onChangeText={(e)=>setBirthday(e)}
                        style={styles.input} placeholder='YYYY-MM-DD'/>

                    <Spacer/>
                    <Spacer/>

                    <YStack>
                        <Button size="$3" theme="active" color={'white'} backgroundColor={PRIMARY_DARK}
                            onPress={signUp}>Sign Up</Button>
                        </YStack>

                    <Spacer/>

                </View>

                <View style={{flex:1,alignContent:'center',justifyContent:'center',flexDirection:'row',marginTop:30}}>
                    <Text style={styles.text}>Already have An Account ? </Text>
                    <TouchableOpacity onPressOut={()=>navigation.navigate('login')}>
                        <Text style={styles.link}> Sign In</Text>
                    </TouchableOpacity>
                </View>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>

                <Loading open={open} close={()=>openModal(false)} />

            </ScrollView>
        </Container>
    )
}



export default Login;
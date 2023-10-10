import React,{useState} from 'react'
import { View,TouchableOpacity } from 'react-native'
import { Button, ScrollView, Text } from 'tamagui'
import { Input, Spacer } from 'tamagui'
import { Label } from 'tamagui'
import { H2, H4 } from 'tamagui'
import Container from '../Components/Container'

const Login = ({ navigation }) => {

    function sign() {
        navigation.navigate('home')
    }
    
    return (
        <Container>
            
            <ScrollView style={{marginTop:20}}>

            <View style={{flex:1}}>
                <H4>Welcome, please</H4>
                <H2>Log In !</H2>
            </View>
            
            <View style={{flex:5,paddingLeft:20,paddingRight:20,height:'100%',flex:1,flexGrow:1,justifyContent:'center'}}>
                <Label htmlFor="name">Email</Label>
                <Input />

                <Spacer/>

                <Label htmlFor="name">Password</Label>
                <Input secureTextEntry/>

                <Spacer/>

                <Label htmlFor="name">Password Confirmation</Label>
                <Input secureTextEntry/>

                <Spacer/>

                <Label htmlFor="name">Birthday</Label>
                <Input />

                <Spacer/>

                <Button size="$3" theme="active" color={'$color.blue10Light'} 
                    onPress={sign}>Sign Up</Button>

                <Spacer/>

            </View>

            <View style={{flex:1,alignContent:'center',justifyContent:'center',flexDirection:'row',marginBottom:30}}>
                <Text>Already have An Account ? </Text>
                <TouchableOpacity onPressOut={()=>navigation.navigate('login')}>
                    <Text> Sign In</Text>
                </TouchableOpacity>
            </View>

            </ScrollView>
        </Container>
    )
}

export default Login;
import React,{useState} from 'react'
import { View,TouchableOpacity } from 'react-native'
import { Button, Text } from 'tamagui'
import { Input, Spacer, VisuallyHidden } from 'tamagui'
import { Label } from 'tamagui'
import { H1, H2, H3, H4, H5, H6, Heading } from 'tamagui'
import Container from '../Components/Container'

const Login = ({ navigation }) => {
    return (
        <Container>
            <View style={{flex:1}}>
                <H4>Welcome, please</H4>
                <H2>Log In !</H2>
            </View>

            <View style={{flex:4,paddingLeft:20,paddingRight:20,height:'100%',flex:1,flexGrow:1,justifyContent:'center'}}>
                <Label htmlFor="name">Email</Label>
                <Input defaultValue="Nate Wienert" />

                <Spacer/>

                <Label htmlFor="name">Email</Label>
                <Input defaultValue="Nate Wienert" />

                <Spacer/>

                <TouchableOpacity>
                    <Text>Forgot your Password ?</Text>
                </TouchableOpacity>

                <Spacer/>

                <Button size="$3" theme="active" color={'$color.blue10Light'}>Sign In</Button>

                <Spacer/>

            </View>

            <View style={{flex:1,alignContent:'center',justifyContent:'center',flexDirection:'row',marginTop:30}}>
                <Text>Don't have an Account ? </Text>
                <TouchableOpacity onPressOut={()=>navigation.navigate('signup')}>
                    <Text> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default Login;
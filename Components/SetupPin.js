import React,{useState} from 'react'
import { SafeAreaView,ScrollView,View} from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import secure from './../assets/img/true_secure.png';
import { Button, H2, H3, H6, Image, Spacer, Text } from 'tamagui';
import { SECONDARY, styles } from '../styles';
import axios from 'axios';

export default SetupPin = ({setAccount}) => {

    const [pin,setPin] = useState('');
    const [pin_confirmation,setPinConfirmation] = useState('');

    const validate = () => {
        if(pin < 4 && pin_confirmation <4){
            console.warn("please insert your PIN(s)");
        }
        if(pin == pin_confirmation){
            axios.post('/account/activate/',{pin,pin_confirmation})
            .then((response)=>{
                if(response.data.success){
                    setAccount(response.data.account)
                    console.warn(response.data.message);
                }else{
                    console.warn(response.data.message);
                    setPin("")
                    setPinConfirmation("")
                }
            }).catch((error)=>{
                console.warn(error);
            });
        }else{
            console.warn('ALERT',"CODE NOT MATCH C : "+code+" CC : "+codeConfirmation);
        }
    }

    return (
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:30}}>

            <Image source={secure} style={{width:50,height:50}}/>
            <H3>Secure your Account</H3>
            <Text>Help us to protect your account from lost !</Text>

            <Spacer />
            <Spacer />

            <View>
                <Text style={[styles.textmuted,{marginLeft:-4,paddingBottom:5}]}>Insert PIN</Text>
                <SmoothPinCodeInput
                    password
                    mask="﹡"
                    ref={this.pinInput}
                    value={pin}
                    onTextChange={code => setPin(code)}
                    cellStyle={styles.cellpin}
                    cellStyleFocused={styles.focusedpin}
                />
            </View>

            <Spacer />

            <View>
                <Text style={[styles.textmuted,{marginLeft:-4,paddingBottom:5}]}>Confirm PIN</Text>
                <SmoothPinCodeInput
                    password
                    mask="﹡"
                    value={pin_confirmation}
                    onTextChange={code => setPinConfirmation(code)}
                    cellStyle={styles.cellpin}
                    cellStyleFocused={styles.focusedpin}
                />
            </View>

            <Spacer/>
            <Spacer/>
            <Button size="$4" theme="active" color={'white'} 
                    backgroundColor={SECONDARY}
                    onPress={validate}
                    style={{fontWeight:'bolder',alignSelf:'center',width:200}}
                            >VALIDATE</Button>
            
        </View>
    )
}
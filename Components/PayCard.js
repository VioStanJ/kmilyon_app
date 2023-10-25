import React,{useState} from 'react'
import { SafeAreaView,ScrollView,View,ImageBackground } from 'react-native'
import { PRIMARY_DARK, styles } from '../styles'
import { Button, H4, Image, Input, Label, Separator, Spacer } from 'tamagui'
import imgcoin from './../assets/img/coin.png'
import { formatMoney } from '../const'

export default PayCard = ({close,send}) => {

    const [card_name,setCardName] = useState("")
    const [card_number,setCardNumber] = useState("")
    const [cvv,setCVV] = useState("")
    const [exp_date,setDate] = useState("")
    const [amount,setAmount] = useState(0)

    function verify(){
        send({card_name,card_number,cvv,exp_date,amount});
    }

    return (
        <View style={{width:300}}>
            <Label style={styles.text}>Full Name</Label>
            <Input  value={card_name} onChangeText={(e)=>setCardName(e)} style={[styles.input,{marginBottom:10}]}/>

            <Label style={styles.text}>Card Number</Label>
            <Input  keyboardType='numeric' value={card_number.toString()} onChangeText={(e)=>setCardNumber(e)} style={[styles.input,{marginBottom:10}]}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexBasis:'48%'}}>
                    <Label style={styles.text}>CVV</Label>
                    <Input secureTextEntry keyboardType='numeric' value={cvv.toString()} onChangeText={(e)=>setCVV(e)} style={styles.input}/>
                </View>

                <View style={{flexBasis:'48%'}}>
                    <Label style={styles.text}>Expiration Date</Label>
                    <Input value={exp_date.toString()} onChangeText={(e)=>setDate(e)} style={styles.input}/>
                </View>
            </View>

            <Spacer />
            <Spacer />
            <Separator />
            <Spacer />

            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                    <H4>{formatMoney(amount*100)} </H4>
                    <Image source={imgcoin} style={{width:30,height:30}}/>
                </View>
                <View style={{flexBasis:'50%'}}>
                    <Label style={styles.text}>Amount</Label>
                    <Input keyboardType='numeric' value={amount.toString()} onChangeText={(e)=>setAmount(e)} style={styles.input}/>
                </View>
            </View>

            <Spacer />
            <Separator />
            <Spacer />

            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <Button size="$3" theme="active" color={'white'} backgroundColor={PRIMARY_DARK}
                                onPress={verify}>Buy</Button>
                                <Spacer/>
                <Button size="$3" theme="active" color={'white'} backgroundColor={"$gray10"}
                                onPress={close}>Close</Button>
            </View>
        </View>
    )
}
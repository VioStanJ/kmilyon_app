import React,{useState,useEffect} from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import Container from '../Components/Container';
import Content from '../Components/Content';
import SetupPin from '../Components/SetupPin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { H3 } from 'tamagui';

const Wallet = ({ navigation }) => {
    const [account,setAccount] = useState({user: 25,point: 0,point_bonus: 0,active: false,status: true})

    const setActiveAccount = (account) => {
        AsyncStorage.setItem('account',JSON.stringify(account))
        setAccount(account)
        console.warn("ACCOUNT",account);
    }

    // Effect
  useEffect(() => {
    AsyncStorage.getItem('account').then((acc)=>{
        setAccount(JSON.parse(acc))
    });
  })

    return (
        <Content>
            {
                account.active?
                    <View>
                        <H3>Account</H3>
                    </View>
                :
                <SetupPin setAccount={setActiveAccount} />
            }
        </Content>
    )
}

export default Wallet;
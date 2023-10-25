import React,{useState,useEffect} from 'react'
import { SafeAreaView,ScrollView,View,Text,ImageBackground,FlatList, ActivityIndicator } from 'react-native'
import Container from '../Components/Container';
import Content from '../Components/Content';
import SetupPin from '../Components/SetupPin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { H1, H3, H4, Spacer,Dialog } from 'tamagui';
import wallet from './../assets/img/CardWallet.png';
import { styles } from '../styles';
import { formatMoney } from '../const';
import TopUp from '../Components/TopUp';
import card from './../assets/img/card.png';
import paypal from './../assets/img/paypal.png';
import PayCard from '../Components/PayCard';
import Loading from '../Components/Loading';
import axios from 'axios'

const Wallet = ({ navigation }) => {
    
    const [loaded,setLoad] = useState(false);
    const [account,setAccount] = useState({user: 25,point: 0,point_bonus: 0,active: false,status: true})
    const [profile,setProfile] = useState({})
    const [openCard,setOpenCard] = useState(false)

    const topups = [{title:'Card',image:card},{title:'PayPal',image:paypal}];
    const [open,openModal] = useState(false)
   
    const setActiveAccount = (account) => {
        AsyncStorage.setItem('account',JSON.stringify(account))
        setAccount(account)
        console.warn("ACCOUNT",account);
    }

    function openPayment(name){
        switch (name) {
            case 'Card':
                setOpenCard(true)
                break;
        
            default:
                break;
        }
        console.warn(name);
    }

    function payWithCard(payment){

        setOpenCard(false)
        openModal(true)
        axios.post('/add/card/payment/',payment).then((response)=>{
            console.warn(response.data);
            if(response.data.success){
                setAccount(response.data.account);
            }
            console.warn(response.data.message);
            openModal(false)
        }).catch((error)=>{
            console.warn(error);
            openModal(false)

        })
    }
    // Effect
  useEffect(() => {
    AsyncStorage.getItem('account').then((acc)=>{
        console.warn("ACCOUNT",JSON.parse(acc));
        setAccount(JSON.parse(acc))
    });
    AsyncStorage.getItem('profile').then((pro)=>{
        setProfile(JSON.parse(pro))
    });
    setTimeout(()=>{
        setLoad(true)
    },1000)
  },[])

    return (
        loaded?
        <Content>
            {
                account && account.active?
                    <View style={{padding:20}}>

                        {/* Wallet */}
                        <ImageBackground  source={wallet} resizeMode='cover'
                            style={styles.walletBackground}>
                            <Text style={{color:'gray',textAlign:'right',fontWeight:'bold',fontSize:16}}>{profile?"# "+profile.code:"--"}</Text>

                            <Text style={{color:'white',fontWeight:'200'}}>Your Balance is</Text>
                            <H1 style={{color:'white',fontWeight:'bolder',marginLeft:30}}>{formatMoney(account.point)}</H1>

                            <Text style={{color:'white',fontWeight:'200'}}>Bonus</Text>
                            <H3 style={{color:'white',fontWeight:'normal',marginLeft:30,marginTop:-5}}>{formatMoney(account.point_bonus)}</H3>

                            <Text style={{alignSelf:'flex-end',backgroundColor:'green',color:'white',width:70,textAlign:'center',borderRadius:3,marginTop:-10}}>
                                {
                                    account.active?
                                    "Active":"Inactive"
                                }
                            </Text>

                        </ImageBackground>

                        <Spacer />

                        {/* Top Up */}
                        <H4>Top Up</H4>

                        <FlatList
                            horizontal={true}
                            data={topups}
                            renderItem={({item}) => <TopUp title={item.title} image={item.image} onPress={()=>openPayment(item.title)}/>}
                            keyExtractor={item => item.title}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop:10,marginBottom:60}}
                        />

                        <Dialog open={openCard}
                            style={{width:200}}>
                            <Dialog.Trigger />
                            <Dialog.Portal>
                            <Dialog.Overlay />
                            <Dialog.Content>
                                <PayCard close={()=>setOpenCard(false)} send={payWithCard}/>
                            </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog>
                    </View>
                :
                <SetupPin setAccount={setActiveAccount} />
            }
            
            <Loading open={open} close={()=>openModal(false)} />

        </Content>
        :
        <ActivityIndicator size="small" color="#0000ff" />

    )
}

export default Wallet;
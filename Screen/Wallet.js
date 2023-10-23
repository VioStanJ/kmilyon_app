import React,{useState,useEffect} from 'react'
import { SafeAreaView,ScrollView,View,Text,ImageBackground,FlatList } from 'react-native'
import Container from '../Components/Container';
import Content from '../Components/Content';
import SetupPin from '../Components/SetupPin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { H1, H3, H4, Spacer } from 'tamagui';
import wallet from './../assets/img/CardWallet.png';
import { styles } from '../styles';
import { formatMoney } from '../const';
import TopUp from '../Components/TopUp';
import card from './../assets/img/card.png';
import paypal from './../assets/img/paypal.png';

const Wallet = ({ navigation }) => {
    const [account,setAccount] = useState({user: 25,point: 0,point_bonus: 0,active: false,status: true})
    const [profile,setProfile] = useState({})

    const topups = [{title:'Card',image:card},{title:'PayPal',image:paypal}];

   
    const setActiveAccount = (account) => {
        AsyncStorage.setItem('account',JSON.stringify(account))
        setAccount(account)
        console.warn("ACCOUNT",account);
    }

    function open(name){
        console.warn(name);
    }

    // Effect
  useEffect(() => {
    AsyncStorage.getItem('account').then((acc)=>{
        setAccount(JSON.parse(acc))
    });
    AsyncStorage.getItem('profile').then((pro)=>{
        setProfile(JSON.parse(pro))
    });
  },[])

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

    return (
        <Content>
            {
                account.active?
                    <View style={{padding:20}}>

                        {/* Wallet */}
                        <ImageBackground  source={wallet} resizeMode='cover'
                            style={{flexDirection: 'column',height:200,padding:20,elevation:6}}>
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
                            renderItem={({item}) => <TopUp title={item.title} image={item.image} onPress={()=>open(item.title)}/>}
                            keyExtractor={item => item.title}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop:10,marginBottom:60}}
                        />
                    </View>
                :
                <SetupPin setAccount={setActiveAccount} />
            }
        </Content>
    )
}

export default Wallet;
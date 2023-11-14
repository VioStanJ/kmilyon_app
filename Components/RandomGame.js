import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View ,TextInput, Image, ToastAndroid} from 'react-native'
import { Button, H1, H3, H6, Separator, Spacer, Text } from 'tamagui'
import { PRIMARY, PRIMARY_DARK, PRIMARY_LIGHT, SECONDARY, YELLOW_COIN } from '../styles'
import coins from './../assets/img/coins.png';
import lose from './../assets/img/lose.png';
import winimg from './../assets/img/win.png';
import Modal from './Modal';
import axios from './../axiosInterceptor';

export default RandomGame = ({game}) => {

    const [double,setDouble] = useState(2)
    const [point,setPoint] = useState(0)
    const [number,setNumber] = useState("")
    const [review,setReview] = useState(false)
    // process
    const [processing,SetProcessing] = useState(false)
    const [win,setWin] = useState("50")
    const [modalwin,setModalWin] = useState(false)
    const [is_won,setWon] = useState(false)

    useEffect(()=>{
        setPoint(parseFloat(game.price))
    },[])

    function format(number) {
        let nbm = String(parseFloat(number));
        if(double==2){
            return nbm
        }else if(double == 3){
            return nbm.length==1?"0"+nbm:nbm
        }else if(double == 4){
            return nbm.length==1?"0"+nbm:nbm.length==2?"00"+nbm:nbm
        }

        return nbm;
    }

    function bet() {
        if(point <= 0){
            ToastAndroid.show("Please, enter a right amount !",ToastAndroid.SHORT);
        }else{
            setReview(true)
        }
    }
 
    function process(){
        setReview(false)
        // setTimeout(()=>{
            SetProcessing(true)
            let limit = double==2?9:double==3?999:9999;

            const code = game.code;

            let data = {code,point,double,number};
            console.warn(data);

            axios.post("/games/bet",data).then((response)=>{
                console.log("DATA",response.data);

                if(response.data.success){

                    setWin(response.data.ticket.win_number);

                    setTimeout(()=>{
                        SetProcessing(false);
                        if(response.data.ticket.is_won){
                            // Open Modal Won
                            setWon(true)
                        }else{
                            // Open Modal lose
                            setWon(false)
                        }
                        setModalWin(true)
                    },3000);
                }else{
                    SetProcessing(false);
                }
                ToastAndroid.show(response.data.message,ToastAndroid.SHORT);

            }).catch((err)=>{
                SetProcessing(false)
                ToastAndroid.show("Network Error !",ToastAndroid.SHORT);
            })
        // },600);
        
    }

    function getRandomNumberInRange(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    function reinit() {
        setModalWin(false);
        setDouble(2);
        setPoint(1);
        setNumber("")
        setWin("--")
    }

    return (
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',padding:20}}>
            <H6>Choose your Pool</H6>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Button size={'$4'} theme="active" color={'white'} 
                    backgroundColor={double==2?SECONDARY:'gray'}
                    onPress={()=>setDouble(2)}>
                    2x
                </Button>
                <Spacer/>
                <Button size={'$4'} theme="active" color={'white'} 
                    backgroundColor={double==3?SECONDARY:'gray'}
                    onPress={()=>setDouble(3)}>
                    3x
                </Button>
                <Spacer/>

                <Button size={'$4'} theme="active" color={'white'} 
                    backgroundColor={double==4?SECONDARY:'gray'}
                    onPress={()=>setDouble(4)}>
                    4x
                </Button>
            </View>

            <Spacer/>
            <Separator alignSelf="stretch" />
            <Spacer/>

            <H6>Choose your lucky number</H6>
            <H6 style={{fontWeight:'bold',color:PRIMARY}}>
                {
                    double==2?
                        "[ 0 - 9]":
                        double==3?"[ 00 - 99 ]":
                            "[ 000 - 999 ]"
                }
            </H6>
            
            <View style={{flexDirection:'row',borderWidth:1,borderRadius:8}}>
                <Button backgroundColor={"white"} onPress={()=>setNumber(parseFloat(number)-1)}>-</Button>
                <TextInput style={{width:80,height:40,borderWidth:0,borderRadius:0,backgroundColor:'white',textAlign:'center',fontWeight:'bold'}}
                    value={String(number)} onChangeText={(e)=>setNumber(e)} inputMode='numeric'/>
                <Button backgroundColor={"white"} onPress={()=>setNumber(parseFloat(number)+1)}>+</Button>
            </View>

            <Spacer/>
            <Separator alignSelf="stretch" />
            <Spacer/>

            <H6>Pit you number</H6>

            <View style={{flexDirection:'row',borderWidth:1,borderRadius:8,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <TextInput style={{width:160,height:40,textAlign:'center'}} inputMode='numeric'
                    value={String(point)} onChangeText={(e)=>setPoint(e)}/>
                <Image source={coins} style={{width:30,height:30}}/>
            </View>

            <Spacer/>
            <Spacer/>

            <Button size="$4" theme="active" color={'white'} 
                    backgroundColor={SECONDARY}
                    style={{fontWeight:'bolder',alignSelf:'center',width:200}}
                            onPress={bet}>BET</Button>

            <Modal open={review} component={<View>
                    <H6>Review</H6>
                    <Separator/>
                    <Spacer />
                    <View style={{flexDirection:'row'}}> 
                        <H6>DOUBLE : </H6>
                        <H6 style={{fontWeight:'bold',color:SECONDARY}}>{double}x</H6>
                    </View>
                    <View style={{flexDirection:'row'}}> 
                        <H6>AMOUNT : </H6>
                        <H6 style={{fontWeight:'bold',color:SECONDARY}}>{point} pts</H6>
                    </View>
                    <View style={{flexDirection:'row'}}> 
                        <H6>lucky number : </H6>
                        <H6 style={{fontWeight:'bold',color:SECONDARY}}>{format(number)}</H6>
                    </View>
                    <Spacer/>
                    <View style={{flexDirection:'row'}}> 
                        <H6>POSIBLE GAINS : </H6>
                        <H6 style={{fontWeight:'bold',color:SECONDARY}}>{point*double} pts</H6>
                    </View>
                    <Spacer />
                    <Separator/>
                    <Spacer/>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Button size={"$3"} onPress={()=>setReview(false)}>
                            Close
                        </Button>

                        <Spacer/>

                        <Button size={"$3"} backgroundColor={PRIMARY} color={"white"}
                            onPress={process}>
                            Continue
                        </Button>
                    </View>

                </View>}/>

                {/* PROCESSING */}

                <Modal open={processing} component={
                    <View>
                        <H1>{format(getRandomNumberInRange(0,double==2?9:double==3?999:9999))}</H1>
                    </View>
                }/>

            <Modal open={modalwin} component={
                    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        {
                            <>
                                <Text>DRAWED BALL</Text>
                                <H1 style={{color:YELLOW_COIN}}>{format(win)}</H1>
                            </>
                        }
                        <Image source={is_won?winimg:lose} style={{height:90,width:120,objectFit:'contain'}} />
                        {
                           is_won?
                           <>
                            <H6 style={{fontWeight:'bold',color:PRIMARY_LIGHT}}>Congrats !</H6>
                            <H6 style={{fontWeight:'bold',color:PRIMARY}}>You won {point*double} Points</H6>
                           </>
                           :null
                        }
                        <Spacer />
                        <Button size={"$3"} onPress={reinit}>
                            Close
                        </Button>
                    </View>
                }/>
        </View>

    )
}
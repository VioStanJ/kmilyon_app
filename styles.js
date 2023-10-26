import { StyleSheet } from 'react-native'

export const PRIMARY_LIGHT = '#b341ff';
export const PRIMARY = "#9737d7";
export const PRIMARY_DARK = "#2b0d40";
export const SECONDARY = "#3700AD";
export const BACKGROUND = '#E9DEFF';
export const YELLOW_COIN = '#BEC11E';

export const styles = StyleSheet.create({
    text : {
        color : 'black',
        fontWeight:400,
        fontSize:14
    },
    textmuted : {
        color : 'grey',
        fontWeight:400,
        fontSize:14
    },
    link : {
        color:PRIMARY,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'white',
        borderColor:'#B4A6BE'
    },
    avatar:{
        borderRadius:50,
    },
    contentPadding:{
        paddingLeft:20,
        paddingRight:20
    },
    card :{
        backgroundColor:'white',borderRadius:6,padding:20,marginTop:20,elevation:1
    },
    cellpin : {
        width:50,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: PRIMARY_DARK,
        backgroundColor: 'white',
    },
    focusedpin:{
        borderColor: PRIMARY,
        backgroundColor: '#dba7fd',
    },
    walletBackground : {
        flexDirection: 'column',height:190,padding:20,elevation:6,
        borderBottomLeftRadius: 10,borderBottomRightRadius: 10,
        borderTopRightRadius: 15,borderTopLeftRadius: 10,overflow: 'hidden'
    }
});
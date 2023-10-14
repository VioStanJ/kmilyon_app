import { Construction } from '@tamagui/lucide-icons';
import { StyleSheet } from 'react-native'

export const PRIMARY_LIGHT = '#b341ff';
export const PRIMARY = "#9737d7";
export const PRIMARY_DARK = "#2b0d40";

export const styles = StyleSheet.create({
    text : {
        color : 'black',
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
    }
});
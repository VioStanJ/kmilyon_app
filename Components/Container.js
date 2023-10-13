import React from 'react'
import { SafeAreaView,ScrollView,View,ImageBackground } from 'react-native'
import {StyleSheet,} from 'react-native';
import frame from './../assets/img/frame.png'

export default Container = (props) => {

    return (
        <ImageBackground source={frame} resizeMode='cover'
            style={[styles.container,{flexDirection: 'column'},]}>

            {props.children}

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexGrow:1
    },
  });
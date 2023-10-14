import React from 'react'
import { SafeAreaView,ScrollView,View,ImageBackground } from 'react-native'
import {StyleSheet,} from 'react-native';
import frame from './../assets/img/frame.png'

export default Content = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                {props.children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexGrow:1
    },
  });
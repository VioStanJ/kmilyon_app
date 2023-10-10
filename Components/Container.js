import React from 'react'
import { SafeAreaView,ScrollView,View } from 'react-native'
import {StyleSheet,} from 'react-native';

export default Container = (props) => {
    return (
        <View style={[styles.container,
                {flexDirection: 'column',backgroundColor:'#d5d5d5'},
            ]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexGrow:1,
      paddingTop:60
    },
  });
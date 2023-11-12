import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { H3 } from 'tamagui'

export default RandomGame = ({game}) => {

    useEffect(()=>{

    },[])

    return (
        <View>
            <H3>{game.code}</H3>
        </View>

    )
}
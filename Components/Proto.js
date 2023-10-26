import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default Proto = ({props}) => {
    const [loaded,setLoad] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setLoad(true)
        },600)
    },[])

    return (
        loaded?
        <View>
            
        </View>
        :
        <ActivityIndicator size="small" color="#0000ff" />

    )
}
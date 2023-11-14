import React from 'react'
import { View,ActivityIndicator, useWindowDimensions } from 'react-native'
import { Button, Dialog, H4, H5 } from 'tamagui'

export default Modal = ({open,component}) => {
    const dimens = useWindowDimensions();


    return (
        <Dialog open={open}
            style={{width:parseInt(dimens.width)}}>
            <Dialog.Trigger />
            <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
                <View style={{width:parseInt(dimens.width)-100,justifyContent:'center',alignItems:'center',flexDirection:'column',padding:20}}>
                    {component}
                </View>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}
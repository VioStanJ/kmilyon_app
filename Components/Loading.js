import React from 'react'
import { View,ActivityIndicator } from 'react-native'
import { Button, Dialog, H5 } from 'tamagui'

export default Loading = ({open,close,info}) => {
    return (
        <Dialog open={open}
            style={{width:200}}>
            <Dialog.Trigger />
            <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
                <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column',padding:20}}>
                    {
                        info?
                            <>
                                <H5>{info}</H5>
                                <Button size="$3" theme="active" color={'white'} backgroundColor={"$gray10"}
                                onPress={close}>Close</Button>
                            </>
                        :
                        <ActivityIndicator size="small" color="#0000ff" />
                    }
                </View>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}
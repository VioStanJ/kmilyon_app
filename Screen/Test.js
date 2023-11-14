import React from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import Container from '../Components/Container';

const Test = ({ navigation }) => {
    return (
        <Container>
            <ScrollView>
                <View>
                    <Text>TEST</Text>
                </View>
            </ScrollView>
        </Container>
    )
}

export default Test;
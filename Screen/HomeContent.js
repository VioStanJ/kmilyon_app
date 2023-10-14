import React from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import Container from '../Components/Container';

const HomeContent = ({ navigation }) => {
    return (
        <Container>
            <ScrollView>
                <View>
                    <Text>Home Content</Text>
                </View>
            </ScrollView>
        </Container>
    )
}

export default HomeContent;
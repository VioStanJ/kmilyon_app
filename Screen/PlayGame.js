import React from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import Container from '../Components/Container';

const PlayGame = ({ navigation }) => {
    return (
        <Container>
            <ScrollView>
                <View>
                    <Text>Play Game</Text>
                </View>
            </ScrollView>
        </Container>
    )
}

export default PlayGame;
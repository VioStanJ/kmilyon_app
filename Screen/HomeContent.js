import React from 'react'
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import Container from '../Components/Container';

const HomeContent = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Home Content</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeContent;
import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ margingTop:30, margingLeft:15}}>
            <Text style={{fontWeight:'bold', fontSize:28 }}>
                SignIn With Google Using RN and Firebase
            </Text>
        </View>
    )
}

export default Header
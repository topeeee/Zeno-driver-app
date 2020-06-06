import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '..'
import { google_logo } from '../../images'
const GoogleLoginButton = ({ text, style }) => {

    return (
        <View style={{
            flexDirection: 'row',
            height: 50, backgroundColor: '#fff', justifyContent: 'space-around', alignItems: 'center', borderRadius: 10, borderColor: '#707070', borderWidth: .2, marginVertical: 5,
            ...style
        }}>
            <Image source={google_logo} />
            <Text style={{ color: '#11243D', fontSize: 15, letterSpacing: 1 }}>{'Connect with Google'}</Text>
            <View />
        </View >
    )
}
export default GoogleLoginButton;
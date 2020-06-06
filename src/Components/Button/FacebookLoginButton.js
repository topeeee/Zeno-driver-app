import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '..'
import { facebook_logo } from '../../images'
const FacebookLoginButton = ({ text, style }) => {

    return (
        <View style={{
            flexDirection: 'row',
            height: 50, backgroundColor: '#4267B2', justifyContent: 'space-around', alignItems: 'center', borderRadius: 10, borderColor: '#707070', borderWidth: .2, marginVertical: 5,
            ...style
        }}>
            <Image source={facebook_logo} />
            <Text style={{ color: '#fff', fontSize: 15, letterSpacing: 1 }}>{'Connect with Facebook'}</Text>
            <View />
        </View >
    )
}
export default FacebookLoginButton;
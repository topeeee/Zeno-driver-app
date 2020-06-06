import React from 'react';
import { View } from 'react-native';
import { Text } from '..'

const Button = ({ text }) => {

    return (
        <View style={{
            height: 50, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginVertical: 5,
        }}>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', letterSpacing: 1 }}>{text}</Text>
        </View >
    )
}
export default Button;
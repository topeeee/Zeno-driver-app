import React from 'react';
import { View } from 'react-native';
import { Text } from '..'

const Input = () => {

    return (
        <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
             <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }} >{'Input'}</Text>
        </View>
    )
}
export default Input;
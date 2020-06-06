import React from 'react';
import { View } from 'react-native';
import { Text } from '..'

const SimpleHeader = ({}) => {

    return (
        <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>X</Text>
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}  >{'Sign up'}</Text>
        </View>
    )
}
export default SimpleHeader;
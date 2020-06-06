import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '../';
import { logo_mini } from '../../images'
const LargeHeader = ({ heading, subHeadeing }) => {
    return (
        <View style={{ borderWidth: 0 }}>
            <Image source={logo_mini} style={{ marginVertical: 5, }} resizeMode={'contain'} />
            <Text style={{ color: '#000', marginVertical: 5, fontSize: 16, }} >{subHeadeing}</Text>
            <Text style={{ color: '#000', marginVertical: 5, fontSize: 24, fontWeight: 'bold' }}  >{heading}</Text>
        </View>
    )
}
export default LargeHeader;
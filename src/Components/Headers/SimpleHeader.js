import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '../'
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { arrow_back_left } from "../../images";
const SimpleHeader = ({ }) => {

    return (
        <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image source={arrow_back_left} />
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}  >{'Sign up'}</Text>
        </View>
    )
}
export default SimpleHeader;
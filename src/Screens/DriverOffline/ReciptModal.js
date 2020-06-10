import React from 'react';
import { View, Image } from "react-native";
import { Text, Button } from '../../Components';
import { bus, my_location, green_circle, circle_check } from "../../images";

const OnlineBottomContent = () => {

    const renderPickUpByPassenger = () => {
        return (
            <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#000', paddingHorizontal: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: '#fff' }}>{'<'}</Text>
                </View>
                <View>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Drop Off Passenger</Text>
                </View>
                <View />
            </View>
        )
    }

    return (
        <View style={{ marginTop: 30, borderRadius: 20, marginHorizontal: 20, overflow: 'hidden', borderWidth: 1, paddingBottom: 20 }}>
            {renderPickUpByPassenger()}
            <View style={{ alignItems: 'center', }}>
                <Text style={{ fontSize: 12, marginVertical: 20 }}>Trip ID : 0001</Text>
                <Text style={{ fontSize: 24, marginVertical: 20 }}>₦240.00</Text>
                <Image source={circle_check} />
                <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 20 }}>Trip 0001 Has Been Successfully Dropped Off </Text>
                <View style={{ backgroundColor: '#C2354D', paddingHorizontal: 10, paddingVertical: 9, borderRadius: 6, marginVertical: 5 }}>
                    <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>Drop more Passengers</Text>
                </View>
            </View>
        </View>
    )
}
export default OnlineBottomContent
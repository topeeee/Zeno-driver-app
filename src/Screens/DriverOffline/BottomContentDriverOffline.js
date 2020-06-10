import React from 'react';
import { View, Image } from "react-native";
import { Text } from '../../Components';
import { offline_moon_black } from "../../images";

const BottomContentDriverOffline = () => {
    return (
        <View style={{ marginVertical: 10, backgroundColor: '#fff', flex: 1, }}>
            <Text style={{ color: '#000', marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}  >Good afternoon Abayomrunkoje</Text>
            <Image style={{ marginHorizontal: 20, alignSelf: 'center' }} source={offline_moon_black} />
            <Text style={{ color: '#000', marginVertical: 5, fontSize: 18, textAlign: 'center', marginVertical: 10 }}  >{`You are offline !\nGo online to start acceptingTrips`}</Text>
        </View>
    )
}
export default BottomContentDriverOffline
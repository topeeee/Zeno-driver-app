import React from 'react';
import { View, TextInput, Modal, Image } from 'react-native';
import { Text, Button, Input } from '../../Components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { popup_banner } from "../../images";


const SelectPassenger = ({ showSetPassengerModal }) => {
    return (<View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .5)', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '85%', height: 300, backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 20, overflow: 'hidden' }}>
                <Text style={{ color: '#fff', fontSize: 16, paddingVertical: 10, textAlign: 'center', fontWeight: 'bold', backgroundColor: '#000', marginHorizontal: -20 }}>Select number of Passengers to Pick</Text>
                <View style={{ flex: 1, borderWidth: 0, marginVertical: 15, borderWidth: 0, marginHorizontal: 0 }}>
                    <Input label={'Number of passenger'} style={{ marginVertical: 5 }} placeholder={'1 - 50'} />
                    <Button onPress={showSetPassengerModal} text={'Done'} style={{ marginVertical: 5, }} />
                    <Text style={{ textAlign: 'center', fontSize: 14, marginVertical: 15, color: '#7A869A' }}>Cancel</Text>
                </View>
            </View>
        </View>
    </View >)
}
export default SelectPassenger;
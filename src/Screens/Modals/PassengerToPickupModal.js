import React from 'react';
import { View, TextInput, Modal, Image } from 'react-native';
import { Text, Button, Input } from '../../Components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { popup_banner } from "../../images";


const PassengerPickupModal = ({ }) => {
    return (<View style={{ flex: 1 }}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={true} >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .5)', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: 300, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', width: '90%', borderRadius: 20, paddingHorizontal: 20, }}>
                    <View style={{ borderWidth: 0, marginVertical: 15, borderWidth: 0, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17, marginVertical: 10, textAlign: 'center', fontWeight: 'bold' }}>Select number of Passengers to Pick</Text>
                        <Input label={'Number of passenger'} style={{ marginVertical: 5 }} placeholder={'1 - 50'} />
                        <Button text={'Done'} style={{ marginVertical: 5, }} />
                        <Text style={{ textAlign: 'center', fontSize: 14, marginVertical: 15, color: '#7A869A' }}>Cancel</Text>
                    </View>
                </View>
            </View>
        </Modal>
    </View >)
}
export default PassengerPickupModal;
import React from 'react';
import { View, TextInput, Modal, Image, ScrollView } from 'react-native';
import { Text, Button, Input } from '../../Components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { popup_banner } from "../../images";


const PassengerPickupModal = ({ }) => {
    return (<View style={{ flex: 1 }}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={true} >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .5)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 500, backgroundColor: '#fff', width: '90%', borderRadius: 20, paddingHorizontal: 20, }}>
                    <View style={{ borderWidth: 0, marginVertical: 15, borderWidth: 0, }}>
                        <ScrollView style={{ width: '100%', borderWidth: 0 }}>
                            <Text style={{ fontSize: 17, marginVertical: 10, fontWeight: 'bold' }}>SignUp new User</Text>
                            <Input label={'Full Name'} style={{}} placeholder={''} />
                            <Input label={'Phone Number'} style={{}} placeholder={''} />
                            <Input label={'Address'} style={{}} placeholder={''} />
                            <Input label={'Select Drop Bus Stop'} style={{}} placeholder={''} />
                        </ScrollView>
                        <Button text={'Sign Up'} style={{}} />
                    </View>
                </View>
            </View>
        </Modal>
    </View >)
}
export default PassengerPickupModal;



import React from 'react';
import { View, TextInput, Modal, Image, ScrollView } from 'react-native';
import { Text, Button, Input } from '../../Components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { popup_banner, my_location } from "../../images";


const PassengerPickupModal = ({ }) => {
    return (<View style={{ flex: 1 }}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={true} >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .5)', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: 500, backgroundColor: '#fff', width: '90%', borderRadius: 20, paddingHorizontal: 20, }}>
                    <View style={{ borderWidth: 0, marginVertical: 15, borderWidth: 0, alignItems: 'center' }}>
                        <Image source={{ uri: 'https://www.pngrepo.com/png/26995/180/avatar.png' }} style={{ width: 70, height: 70, borderRadius: 50 }} />
                        <Text style={{ fontSize: 18, marginVertical: 5 }}>Bruce Black</Text>
                        <Text style={{ fontSize: 14 }}>Area1 - ZN1</Text>
                    </View>
                    <Text style={{ marginVertical: 5, fontSize: 16, flexDirection: 'row', textAlign: 'center' }}>LK1 <Image source={my_location} /> ----------- <Image source={my_location} /> LK1</Text>

                    <View style={{ flexDirection: 'row', borderWidth: 0, height: 90, alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Input label={'Enter PIN'} style={{}} placeholder={'Enter PIN'} />
                        </View>
                        <View style={{ flex: 1, marginHorizontal: 5 }}>
                            <Input label={'Drop Bus stop'} style={{}} placeholder={'Drop Bus stop'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button text={'Sign Up User'} style={{ flex: 1, marginHorizontal: 5 }} />
                        <Button text={'Pick More'} style={{ flex: 1, marginHorizontal: 5 }} />
                    </View>
                </View>
            </View>
        </Modal>
    </View >)
}
export default PassengerPickupModal;
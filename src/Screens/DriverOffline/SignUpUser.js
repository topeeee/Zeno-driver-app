import React from 'react';
import { View, TextInput, Modal, Image, ScrollView } from 'react-native';
import { Text, Button, Input } from '../../Components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { popup_banner } from "../../images";


const PassengerPickupModal = ({ dismiss }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .5)', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '85%', height: 500, backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 20, overflow: 'hidden' }}>
                    <Text style={{ color: '#fff', fontSize: 16, paddingVertical: 10, textAlign: 'center', fontWeight: 'bold', backgroundColor: '#000', marginHorizontal: -20 }}>SignUp new User</Text>
                    <View style={{ flex: 1, borderWidth: 0, marginVertical: 15, borderWidth: 0, marginHorizontal: 0 }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', borderWidth: 0 }}>
                            <Text style={{ fontSize: 17, marginVertical: 0, fontWeight: 'bold' }}></Text>
                            <Input label={'Full Name'} style={{}} placeholder={''} />
                            <Input label={'Phone Number'} style={{}} placeholder={''} />
                            <Input label={'Address'} style={{}} placeholder={''} />
                            <Input label={'Select Drop Bus Stop'} style={{}} placeholder={''} />
                        </ScrollView>
                        <Button onPress={dismiss} text={'Sign Up'} style={{}} />
                    </View>
                </View>
            </View>
        </View >

        // <View style={{ flex: 1 }}>
        //     <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .5)', justifyContent: 'center', alignItems: 'center' }}>
        //         <View style={{ height: 500, backgroundColor: '#fff', width: '90%', borderRadius: 20, paddingHorizontal: 20, }}>
        //             <View style={{ borderWidth: 0, marginVertical: 15, borderWidth: 0, }}>
        //                 <ScrollView style={{ width: '100%', borderWidth: 0 }}>
        //                     <Text style={{ fontSize: 17, marginVertical: 10, fontWeight: 'bold' }}>SignUp new User</Text>
        //                     <Input label={'Full Name'} style={{}} placeholder={''} />
        //                     <Input label={'Phone Number'} style={{}} placeholder={''} />
        //                     <Input label={'Address'} style={{}} placeholder={''} />
        //                     <Input label={'Select Drop Bus Stop'} style={{}} placeholder={''} />
        //                 </ScrollView>
        //                 <Button onPress={dismiss} text={'Sign Up'} style={{}} />
        //             </View>
        //         </View>
        //     </View>
        // </View >
    )
}
export default PassengerPickupModal;



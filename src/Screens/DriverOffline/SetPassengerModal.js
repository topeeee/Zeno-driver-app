import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import { Text, Button, Input } from '../../Components'


const SetPassengerModal = ({ showSignUpUser, backToHome }) => {
    return (<View style={{ flex: 1 }}>
        <View style={styles.container}>
            <View style={styles.modalCont}>
                <Text style={styles.header}>Passenger: 2</Text>
                <View style={styles.itemCont}>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <Input label={'Enter PIN'} style={{}} placeholder={'1234'} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <Text style={{ color: '#7A869A', fontSize: 15 }} >Drop Bus stop</Text>
                        <Picker
                            style={{ width: '100%' }}>
                            <Picker.Item label="Option 1" value="Option 1" />
                            <Picker.Item label="Option 2" value="Option 2" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.itemCont}>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <Input label={'Enter PIN'} style={{}} placeholder={'1234'} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <Text style={{ color: '#7A869A', fontSize: 15 }} >Drop Bus stop</Text>
                        <Picker
                            style={{ width: '100%' }}>
                            <Picker.Item label="Option 1" value="Option 1" />
                            <Picker.Item label="Option 2" value="Option 2" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button onPress={showSignUpUser} text={'Sign Up User'} style={{ flex: 1, marginHorizontal: 5 }} />
                    <Button text={'Pick More'} style={{ flex: 1, marginHorizontal: 5 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button onPress={backToHome} text={'Home'} style={{ flex: 1, marginHorizontal: 5 }} />
                    <View style={{ flex: 1, }} />
                </View>
            </View>
        </View>
    </View >)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'rgba(0, 0, 0, .5)', alignItems: 'center', justifyContent: 'center'
    },
    modalCont: {
        height: 388, backgroundColor: '#fff', width: '90%', borderRadius: 20, paddingHorizontal: 20, justifyContent: 'center'
    },
    header: {
        fontSize: 18, marginVertical: 10, textAlign: 'center', fontWeight: 'bold'
    },
    itemCont: {
        flexDirection: 'row', borderWidth: 0, height: 90, alignItems: 'center'
    }
})
export default SetPassengerModal;
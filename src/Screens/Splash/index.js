import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { logo, splash_bottom_banner } from "../../images";
import { Text } from '../../Components';

const { width } = Dimensions.get('window')

const Splash = ({ navigation }) => {


    const onPressStart = () => {
        navigation.navigate('Welcome')
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo} />
                <Text style={{ marginVertical: 10, fontSize: 22 }}  >{'Driver'}</Text>
                <Text onPress={onPressStart} style={{ marginVertical: 10, fontSize: 20, borderWidth: 1, paddingHorizontal: 20, borderRadius: 10, paddingVertical: 10, color: '#000', marginTop: 30, borderColor: '#000' }}  >{'START'}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{}}>
                    <Image style={{ width: width + 20, height: 430 }} source={splash_bottom_banner} />
                </View>
            </View>

        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
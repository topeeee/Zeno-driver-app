import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { logo, splash_bottom_banner } from "../../images";
import { Text } from '../../Components';

const { width } = Dimensions.get('window')

const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo} />
                <Text style={{ marginVertical: 10, fontSize: 22 }}  >{'Driver'}</Text>
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
    }
})
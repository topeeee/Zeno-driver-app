import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { welcome_banner } from "../../images";
import { Text } from '../../Components';
import { SimpleHeader, LargeHeader, Button } from '../../Components'


const Login = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 25 }}>
                <SimpleHeader />
                <LargeHeader subHeadeing={'Hello, nice to meet you!'} heading={'Get the Zeno experience'} />
            </View>
            
            <View style={{ marginHorizontal: 25 }}>
                <Button text={'SIGN UP'} />
                <Text style={{ textAlign: 'center', marginVertical: 15, fontSize: 15 }}>Already have an account? Sign in.</Text>
                <View style={{ marginVertical: 10, }}>
                    <Text style={{ textAlign: 'center', }}>{`By Signing in, you agree to Zeno's`}</Text>
                    <Text style={{ textAlign: 'center', color: '#008751', }}>{`terms and conditions.`}</Text>
                </View>
            </View>
        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 25,
        backgroundColor: '#fff'
    }
})
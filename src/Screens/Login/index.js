import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import { welcome_banner } from "../../images";
import { Text } from '../../Components';
import { SimpleHeader, LargeHeader, Button, Input, GoogleLoginButton, FacebookLoginButton } from '../../Components'


const Login = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{ marginHorizontal: 25 }}>
                <SimpleHeader />
                <LargeHeader subHeadeing={'Hello, nice to meet you!'} heading={'Get the Zeno experience'} />
            </View>
            <View style={{ marginHorizontal: 25, }}>
                <Input label={'Email Address'} value={'jacksparrow@gmail.com'} style={{ marginVertical: 5 }} />
                <Input label={'Password'} value={'************'} style={{ marginVertical: 5 }} />
                <Text style={{ textAlign: 'center', marginVertical: 5 }}>{`Forget password?`}</Text>
                <Button text={'SIGN IN'} style={{ marginVertical: 5 }} />
                <Text style={{ textAlign: 'center', marginVertical: 5 }}>{`Or Login with`}</Text>
                <GoogleLoginButton style={{ marginVertical: 5 }} />
                <FacebookLoginButton style={{ marginVertical: 5 }} />
                <Text style={{ textAlign: 'center', marginVertical: 5 }}>{`Or connect create account`}</Text>
            </View>
        </ScrollView >
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
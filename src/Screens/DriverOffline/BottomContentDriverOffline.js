import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import { Text } from '../../Components';
import { offline_moon_black } from "../../images";

const BottomContentDriverOffline = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}  >Good afternoon Abayomrunkoje</Text>
            <Image style={styles.imageMoon} source={offline_moon_black} />
            <Text style={styles.subHeading}  >{`You are offline !\nGo online to start acceptingTrips`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10, backgroundColor: '#fff', flex: 1,
    },
    heading: {
        color: '#000', marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'
    },
    imageMoon: {
        marginHorizontal: 20, alignSelf: 'center'
    },
    subHeading: {
        color: '#000', marginVertical: 5, fontSize: 18, textAlign: 'center', marginVertical: 10
    }
})

export default BottomContentDriverOffline
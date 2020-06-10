import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, Switch, TouchableHighlightBase } from 'react-native'
import { offline_moon, menu, curruncy_logo, mobile_icon, marker } from "../../images";
import { Text } from '../../Components';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './BottomSheet'
import Switches from 'react-native-switches'
import MapView, { Marker } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import BottomContentDriverOffline from './BottomContentDriverOffline';
import BottomContentDriverOnline from './BottomContentDriverOnline';

const { height } = Dimensions.get('window')

const DriverOffline = () => {

    const DriverOfflineBottomSheetRef = useRef();
    const DriverOnlineBottomSheetRef = useRef();

    const [isDriverOnline, setIsDriverOnline] = useState(false)
    useEffect(() => {
        if (isDriverOnline) {
            DriverOfflineBottomSheetRef.current.open()
        } else {
            DriverOnlineBottomSheetRef.current.open()
        }
    }, [isDriverOnline])

    const renderHeader = () => {
        return (
            <View style={{ height: 70, borderWidth: 0, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                <View style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderWidth: .2 }}>
                    <Image source={menu} />
                </View>
                <View style={{ width: 100, height: 30, backgroundColor: '#fff', borderWidth: 0, borderRadius: 100, overflow: 'hidden', flexDirection: 'row' }}>
                    <View style={{ width: 50, height: 30, backgroundColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={mobile_icon} />
                    </View>
                    <View style={{ width: 50, height: 30, backgroundColor: '#679C4C', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={curruncy_logo} />
                    </View>
                </View>
                <View style={{}}>
                    <Switches
                        colorSwitchOff={'#fff'}
                        colorSwitchOn={'#fff'}
                        buttonColor={'#5D5D5D'}
                        borderColor={'#000'}
                        value={isDriverOnline} shape={'pill'}
                        showText={false}
                        onChange={() => { setIsDriverOnline(!isDriverOnline) }} />
                </View>
            </View>
        )
    }

    const renderDriverOfflineBottomSheet = () => {
        return (
            <RBSheet
                animationType={'slide'}
                ref={DriverOfflineBottomSheetRef}
                height={200}
                openDuration={150}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }
                }}
            >
                <BottomContentDriverOffline />
            </RBSheet>
        )
    }
    const renderDriverOnlineBottomSheet = () => {
        return (
            <RBSheet
                dragFromTopOnly={true}
                animationType={'slide'}
                ref={DriverOnlineBottomSheetRef}
                height={580}
                openDuration={150}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }
                }}
            >
                <BottomContentDriverOnline />
            </RBSheet>
        )
    }

    const renderOfflineBanner = () => {
        return (
            isDriverOnline ? <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flexDirection: 'row', backgroundColor: '#6D6D6D', height: 64, alignItems: 'center', }}>
                <Image style={{ marginHorizontal: 10 }} source={offline_moon} />
                <Text style={{ flex: 1, marginHorizontal: 15, color: '#fff', fontSize: 16 }}>{`You are offline !\nGo online to start accepting Trips`}</Text>
            </LinearGradient> : null
        )
    }

    const renderMap = () => {
        return (
            <MapView
                style={{ flex: 1, borderWidth: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0000000922,
                    longitudeDelta: 0.00421,
                }}
            >
                <Marker
                    style={{}}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                >
                    <Image source={marker} />
                </Marker>
            </MapView>
        )
    }
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            {renderMap()}
            {renderDriverOfflineBottomSheet()}
            {renderDriverOnlineBottomSheet()}
            <LinearGradient colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.5)']} style={{ borderWidth: 0, position: 'absolute', width: '100%' }}>
                {renderHeader()}
                <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000' }}>Offline Booking</Text>
                {renderOfflineBanner()}
            </LinearGradient>
        </View >
    )
}

export default DriverOffline

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
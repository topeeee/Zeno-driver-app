import React from "react";
import { View, Modal } from "react-native";
import { Text } from "../../Components";
import PassengerPickupModal from './PassengerToPickupModal';
import Modal2 from './';
import SignUpUser from './SignUpUser';
import OnlineBottomContent from '../DriverOffline/OnlineBottomContent';

const Modals = () => {
    return (
        <View style={{ flex: 1 }}>
            <OnlineBottomContent />
        </View>
    )
}

export default Modals
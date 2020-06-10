import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { Splash, Welcome, Login, ForgetPassword, SignUp, Popup, DriverOffline , DropOfPassenger , ReciptModal} from './src/Screens';
// import Modals from './src/Screens/Modals'
// import OnlineBottomContent from './src/Screens/DriverOffline/OnlineBottomContent'
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DriverOffline />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;

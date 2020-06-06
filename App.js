import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { Splash, Welcome, Login ,ForgetPassword } from './src/Screens';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ForgetPassword />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;

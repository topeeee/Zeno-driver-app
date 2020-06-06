import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { Splash, Welcome, Login ,ForgetPassword, SignUp } from './src/Screens';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignUp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;

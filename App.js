import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { Splash, Welcome, Login } from './src/Screens';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;

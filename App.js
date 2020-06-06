import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { Popup } from './src/Screens';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Popup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;

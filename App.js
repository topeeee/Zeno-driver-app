import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import store from './src/store';
import {AsyncStorage, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Splash,
  Welcome,
  Login,
  ForgetPassword,
  SignUp,
  Home,
} from './src/Screens';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  axios.interceptors.request.use(
    async (config) => {
      let userData = await AsyncStorage.getItem('userData');
      let data = JSON.parse(userData);
      config.headers.authorization = data;
      return config;
    },
    (error) => Promise.reject(error),
  );


  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'} headerMode={'none'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import {LogIn, getToken} from '../../store/actions/authenticationAction';
import {welcome_banner} from '../../images';
import {Text} from '../../Components';
import {
  SimpleHeader,
  LargeHeader,
  Button,
  Input,
  GoogleLoginButton,
  FacebookLoginButton,
} from '../../Components';

const Login = ({
  navigation,
  isAuthenticated,
  errors,
  loginResponse,
  isLogIn,
  driverEmail,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (driverEmail){
    }
  },[driverEmail]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{marginHorizontal: 25}}>
        <SimpleHeader />
        <LargeHeader
          subHeadeing={'Hello, nice to meet you!'}
          heading={'Get the Zeno experience'}
        />
      </View>
      <View style={{marginHorizontal: 25}}>
        <Input
          label={'Email Address'}
          value={username}
          onChangeText={setUsername}
          style={{marginVertical: 5}}
        />
        <Input
          label={'Password'}
          value={password}
          onChangeText={setPassword}
          style={{marginVertical: 5}}
        />
        {/*<Text*/}
        {/*  onPress={() => navigation.navigate('ForgetPassword')}*/}
        {/*  style={{*/}
        {/*    textAlign: 'center',*/}
        {/*    marginVertical: 5,*/}
        {/*  }}>*/}
        {/*  {'Forget password?'}*/}
        {/*</Text>*/}
        <Button
          onPress={() => isLogIn(username, password)}
          text={'SIGN IN'}
          style={{marginVertical: 5}}
        />
        {/*<Text*/}
        {/*  style={{*/}
        {/*    textAlign: 'center',*/}
        {/*    marginVertical: 5,*/}
        {/*  }}>*/}
        {/*  {'Or Login with'}*/}
        {/*</Text>*/}
        {/*<GoogleLoginButton style={{marginVertical: 5}} />*/}
        {/*<FacebookLoginButton style={{marginVertical: 5}} />*/}
        {/*<Text*/}
        {/*  style={{*/}
        {/*    textAlign: 'center',*/}
        {/*    marginVertical: 5,*/}
        {/*  }}>*/}
        {/*  {'Or connect create account'}*/}
        {/*</Text>*/}
      </View>
    </ScrollView>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    isLogIn: (username, password) => dispatch(LogIn(username, password)),
  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors,
  loginResponse: state.auth.loginResponse,
  driverEmail: state.auth.driverEmail,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text, Button, Input} from '../../Components';

const PassengerPickupModal = ({dismiss, hideSignUpUser}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, .5)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.modal}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              paddingVertical: 10,
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: '#000',
              marginHorizontal: -20,
            }}>
            SignUp new User
          </Text>
          <View style={styles.listCont}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{width: '100%', borderWidth: 0}}>
              <Text
                style={{
                  fontSize: 17,
                  marginVertical: 0,
                  fontWeight: 'bold',
                }}
              />
              <Input label={'Full Name'} style={{}} placeholder={''} />
              <Input label={'Phone Number'} style={{}} placeholder={''} />
              <Input label={'Address'} style={{}} placeholder={''} />
              <Input
                label={'Select Drop Bus Stop'}
                style={{}}
                placeholder={''}
              />
            </ScrollView>
            <Button onPress={hideSignUpUser} text={'Sign Up'} style={{}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: '85%',
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  listCont: {
    flex: 1,
    // borderWidth: 0,
    marginVertical: 15,
    borderWidth: 0,
    marginHorizontal: 0,
  },
});
export default PassengerPickupModal;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, StyleSheet, Picker, FlatList} from 'react-native';
import {Text, Button, Input} from '../../Components';

const PassengerPickupModal = ({
  dismiss,
  hideSignUpUser,
  pickUp,
  driverPin,
  route,
  busStop,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [homeLocation, setHomeLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [passengerPin, setPassengerPin] = useState('');
  const [email, setEmail] = useState('');
  const [mode] = useState('not available');
  const [dateOfBirth] = useState('not available');
  const [status] = useState(1);
  const [pickStatus] = useState(1);
  const [distance] = useState('200km');
  const [cost] = useState(200);
  const [dropOff, setDropOff] = useState('');

  const body = {
    firstName,
    lastName,
    email,
    dateOfBirth,
    phoneNumber,
    homeLocation,
    pin,
    status,
  };

  useEffect(() => {
    if (phoneNumber) {
      setPin(phoneNumber + 'password');
      setEmail(phoneNumber + '@gmail.com');
    }
  }, [phoneNumber]);

  function registerUser() {
    axios
      .post('http://165.22.116.11:7200/api/me/userdetails/', body)
      .then((res) => {
        setPassengerPin(res.data.pin);
        hideSignUpUser();
      });
  }

  // http://165.22.116.11:7500/api/me/trips/?passengerPin=45&mode=mode1&pickUp=pick1&dropOff=drop1&distance=200&cost=200&route=route1&driverPin=driverpin1&pickStatus=1
  function setTrip() {
    const body1 = {
      passengerPin,
      mode,
      pickUp,
      driverPin,
      route,
      pickStatus,
      distance,
      cost,
      dropOff,
    };
    axios.post('http://165.22.116.11:7500/api/me/trips/', body1).then((res) => {
      console.log(res.data, 'trgfgfgfgggfgd');
    });
  }

  useEffect(() => {
    if (passengerPin) {
      setTrip();
    }
  }, [passengerPin]);

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
              <Input
                label={'First Name'}
                style={{}}
                placeholder={''}
                value={firstName}
                onChangeText={setFirstName}
              />
              <Input
                label={'Last Name'}
                style={{}}
                placeholder={''}
                value={lastName}
                onChangeText={setLastName}
              />
              <Input
                label={'Phone Number'}
                style={{}}
                placeholder={''}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <Input
                label={'Address'}
                style={{}}
                placeholder={''}
                value={homeLocation}
                onChangeText={setHomeLocation}
              />
              <Text style={{paddingVertical: 10}}>Drop Off</Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#E6E6EB',
                }}>
                <Picker
                  selectedValue={dropOff}
                  style={{width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    setDropOff(itemValue)
                  }>
                  {busStop &&
                    busStop.map((bus) => (
                      <Picker.Item label={bus.busstop} value={bus.busstop} />
                    ))}
                </Picker>
              </View>
            </ScrollView>
            <Button onPress={registerUser} text={'Sign Up'} style={{}} />
            {/*<Button onPress={hideSignUpUser} text={'Sign Up'} style={{}} />*/}
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

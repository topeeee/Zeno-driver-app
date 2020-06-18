import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from '../../Components';
import {offline_moon_black} from '../../images';
import {connect} from 'react-redux';
import {getDrivers} from '../../store/actions/driverAction';
import axios from 'axios';
import api from '../../environments/environment';

const BottomContentDriverOffline = ({driverEmail, isDriver, drivers}) => {
  const [driver, setDriver] = useState([]);
  const [driverName, setDriverName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    getDriver();
  }, []);

  useEffect(() => {
    if (driverEmail) {
      setIsEmail(driverEmail);
    }
  }, [driverEmail]);

  useEffect(() => {
    if (driver) {
      driver.map((driverName) => {
        if (driverName.email == isEmail) {
          setDriverName(driverName);
        }
      });
    }
  }, [driver]);

  function getDriver() {
    axios.get(`${api.driver}/api/drivers/`).then((res) => {
      setDriver(res.data);
    });
  }

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'Pm' : 'am';
    let strTime = ampm;
    setGreeting(strTime);
  }

  useEffect(() => {
    formatAMPM(new Date());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading} onPress={() => getDriver()}>
        Good {greeting}, {driverName.firstname}
      </Text>
      <Image style={styles.imageMoon} source={offline_moon_black} />
      <Text style={styles.subHeading}>
        {'You are offline !\nGo online to start acceptingTrips'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    color: '#000',
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageMoon: {
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  subHeading: {
    color: '#000',
    marginVertical: 5,
    fontSize: 18,
    textAlign: 'center',
    // marginVertical: 10,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    isDriver: () => dispatch(getDrivers),
  };
}

const mapStateToProps = (state) => ({
  driverEmail: state.auth.driverEmail,
  drivers: state.driver.drivers,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomContentDriverOffline);

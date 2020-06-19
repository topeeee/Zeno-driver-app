import React, {useEffect, useState} from 'react';
import {FlatList, Image, Modal, StyleSheet, View} from 'react-native';
import {Button, Text} from '../../Components';
import {green_circle, my_location} from '../../images';
import SelectPassenger from './SelectPassenger';
import SetPassengerModal from './SetPassengerModal';
import SignUpUser from './SignUpUser';
import ReciptsModal from './ReciptModal';
import axios from 'axios';
import api from '../../environments/environment';
import {getDrivers} from '../../store/actions/driverAction';
import {connect} from 'react-redux';

const OnlineBottomContent = ({driverEmail}) => {
  const [isShowBusStopsList, setIsShowBusStopsList] = useState(true);
  const [isShowSelectPassenger, setIsShowSelectPassenger] = useState(true);
  const [isShowSetPassenger, setIsShowSetPassenger] = useState(false);
  const [isShowPassengerModal, setIsShowPassengerModal] = useState(false);
  const [isShowSignUpUser, setIsShowSignUpUser] = useState(false);
  const [isShowReciptsModal, setIsShowReciptsModal] = useState(false);
  const [driverVehicle, setDriverVehicle] = useState([]);
  const [driverId, setDriverId] = useState('');
  const [driverPin, setDriverPin] = useState('');
  const [driverRoute, setDriverRoute] = useState('');
  const [vehicle, setVehicle] = useState([]);
  const [busStop, setBusStop] = useState([]);
  const [vehicleId, setVehicleId] = useState('');
  const [capacity, setCapacity] = useState(null);
  const [greeting, setGreeting] = useState('');
  const [driver, setDriver] = useState([]);
  const [driverName, setDriverName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [trips, setTrips] = useState([]);
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
    axios
      .get(`${api.driver}/api/drivers/`)
      .then((res) => {
        res.data.map((driver) => {
          if (driver.email == driverEmail) {
            setDriverId(driver.id);
            setDriverPin(driver.pin);
            setDriverRoute(driver.route);
          }
        });
        setDriver(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getDriverVehicle(id) {
    axios
      .get(`${api.driverVehicle}/api/vehicle/?driverId=${id}`)
      .then((res) => {
        res.data.map((data) => {
          setVehicleId(data.vehicleId);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getVehicle(id) {
    axios
      .get(`${api.vehicle}/api/vehicles/${id}/`)
      .then((res) => {
        setVehicle(res.data);
        setCapacity(Number(res.data.capacity));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getBusStop(route) {
    axios
      .get(`${api.busStop}/api/routecode/?search=${route}`)
      .then((res) => {
        const newBusStop = res.data.map((v) => ({...v, pickNumber: 0}));
        setBusStop(newBusStop);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function formatAMPM(date) {
    let hours = date.getHours();
    let strTime = hours >= 12 ? 'Evening' : 'Morning';
    setGreeting(strTime);
  }
  function isBooked(isdrop) {
    setCapacity(capacity - 1);
    const newProjects = busStop.map((p) =>
      p.busstop === isdrop ? {...p, pickNumber: p.pickNumber + 1} : p,
    );

    setBusStop(newProjects);
  }

  function isDropped() {
    setCapacity(capacity + 1);
    const newProjects = busStop.map((p) =>
      p.busstop === drop ? {...p, pickNumber: p.pickNumber - 1} : p,
    );

    setBusStop(newProjects);
  }

  function getTrips() {
    console.log('fired');
    axios
      .get(`http://165.22.116.11:7500/api/trips/?search=${driverRoute}`)
      .then((res) => {
        console.log(res.data)
        setTrips(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function isDrop(tripId) {
    axios
      .put(`http://165.22.116.11:7500/api/drop/${tripId}/?status=1&driverPin=${driverPin}`)
      .then((res) => {
        if (res.data) {
          getTrips();
          isDropped();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function isDropAll() {
    axios
      .post(`http://165.22.116.11:7500/api/dropall/?dropOff=${drop}&driverPin=${driverPin}&pickedStatus=1&dropStatus=1`)
      .then((res) => {
        getTrips();
        isDroppedAll(res.data.length);
        setIsShowReciptsModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function isDroppedAll(amount) {
    setCapacity(capacity + amount);
    const newProjects = busStop.map((p) =>
      p.busstop === drop ? {...p, pickNumber: p.pickNumber - amount} : p,
    );

    setBusStop(newProjects);
  }

  useEffect(() => {
    formatAMPM(new Date());
  }, []);

  useEffect(() => {
    if (driverRoute) {
      getBusStop(driverRoute);
    }
  }, [driverRoute]);

  useEffect(() => {
    if (driverId) {
      getDriverVehicle(driverId);
    }
  }, [driverId]);

  useEffect(() => {
    if (vehicleId) {
      getVehicle(vehicleId);
    }
  }, [vehicleId]);

  const renderBusStopsList = () => {
    return (
      <View>
        <View style={styles.renderBusStopHeaderCont}>
          <Text style={[styles.busStopHeader, {flex: 2}]}>BUS Stops</Text>
          <Text style={styles.busStopHeader}>Drop</Text>
          <Text style={styles.busStopHeader}>Pick</Text>
        </View>
        <FlatList
          style={{height: 400}}
          showsVerticalScrollIndicator={false}
          data={busStop}
          renderItem={(item) => (
            <View style={styles.oneBusStopCont}>
              <View style={{flex: 2, flexDirection: 'row'}}>
                {/*<Text style={{width: 25, fontSize: 16}}>{item.index}</Text>*/}
                <Text style={{fontSize: 16}}>{item.item.busstop}</Text>
              </View>
              <Text
                onPress={() => {
                  getTrips();
                  setIsShowBusStopsList(!isShowBusStopsList);
                  setDrop(item.item.busstop);
                }}
                style={{
                  flex: 1,
                  fontSize: 14,
                  // flex: 1,
                  textAlign: 'center',
                  marginHorizontal: 10,
                  paddingVertical: 7,
                  borderRadius: 5,
                  backgroundColor: '#FF0000',
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                {item.item.pickNumber}
              </Text>
              <Text
                onPress={() => {
                  setIsShowSelectPassenger(true);
                  setIsShowPassengerModal(true);
                  setPickup(item.item.busstop);
                }}
                style={{
                  flex: 1,
                  fontSize: 14,
                  // flex: 1,
                  textAlign: 'center',
                  marginHorizontal: 10,
                  paddingVertical: 7,
                  borderRadius: 5,
                  backgroundColor: '#679C4C',
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                PICK
              </Text>
            </View>
          )}
        />
      </View>
    );
  };

  const renderDropOffPassenger = () => {
    return (
      <View style={{flex: 1}}>
        {trips &&
          trips
            .filter(
              (user) =>
                user.pickStatus == 1 &&
                user.dropStatus == 0 &&
                user.dropOff === drop,
            )
            .map((trip) => (
              <View
                style={{
                  height: 80,
                  borderWidth: 0,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F7F7F7',
                  borderRadius: 10,
                  paddingHorizontal: 5,
                  marginVertical: 3,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, borderWidth: 0, marginHorizontal: 10}}>
                    <Text style={{fontSize: 12}}>Trip ID : {trip.id}</Text>
                    <View
                      style={{
                        backgroundColor: '#C2354D',
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                        borderRadius: 6,
                        width: 75,
                        marginVertical: 5,
                      }}>
                      <Text
                        onPress={() => isDrop(trip.id)}
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Drop
                      </Text>
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <Text />
                    <View
                      style={{
                        backgroundColor: '#679C4C',
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                        borderRadius: 6,
                        width: 75,
                        marginVertical: 5,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Pin: {trip.passengerPin}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <Text />
                    <View
                      style={{
                        backgroundColor: 'gray',
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                        borderRadius: 6,
                        width: 75,
                        marginVertical: 5,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Extend
                      </Text>
                    </View>
                  </View>
                  {/*<Text style={{fontSize: 20}}>₦24</Text>*/}
                </View>
              </View>
            ))}

        <View style={{width: '50%', alignSelf: 'center', marginVertical: 10}}>
          <Button onPress={() => isDropAll()} text={'Drop All'} />
        </View>
      </View>
    );
  };

  const showSetPassengerModal = () => {
    setIsShowSelectPassenger(false);
    setIsShowSetPassenger(true);
  };
  const showSignUpUser = () => {
    setIsShowSelectPassenger(false);
    setIsShowSetPassenger(false);
    setIsShowSignUpUser(true);
  };

  const dismiss = () => {
    setTimeout(() => {
      setIsShowSetPassenger(false);
      setIsShowSignUpUser(false);
      setIsShowPassengerModal(false);
    }, 0);
  };
  const hideSignUpUser = () => {
    setIsShowSignUpUser(false);
    setIsShowSetPassenger(false);
    setIsShowSetPassenger(true);
  };
  const renderSelectPassenger = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowPassengerModal}>
        {isShowSelectPassenger && (
          <SelectPassenger showSetPassengerModal={showSetPassengerModal} />
        )}
        {isShowSetPassenger && (
          <SetPassengerModal
            showSignUpUser={showSignUpUser}
            backToHome={backToHome}
          />
        )}
        {isShowSignUpUser && (
          <SignUpUser
            dismiss={dismiss}
            hideSignUpUser={hideSignUpUser}
            pickUp={pickup}
            driverPin={driverPin}
            route={driverRoute}
            busStop={busStop}
            isBooked={isBooked}
          />
        )}
      </Modal>
    );
  };

  const backToHome = () => {
    setIsShowSetPassenger(false);
    setIsShowBusStopsList(true);
    setIsShowSelectPassenger(true);
    setIsShowPassengerModal(false);
    setIsShowSignUpUser(false);
    setIsShowReciptsModal(false);
  };

  const renderReciptsModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowReciptsModal}>
        <ReciptsModal dismiss={backToHome} />
      </Modal>
    );
  };

  return (
    <View style={styles.mainCont}>
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            color: '#000',
            marginVertical: 10,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Good {greeting}, {driverName.firstname}
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Zone:</Text>
          <Text
            style={{fontWeight: 'bold', marginHorizontal: 10, fontSize: 16}}>
            {driverName.zone}
          </Text>
          <Text style={{marginHorizontal: 10}}>|</Text>
          <Text style={{fontSize: 16}}>Area:</Text>
          <Text
            style={{fontWeight: 'bold', marginHorizontal: 10, fontSize: 16}}>
            {driverName.area}
          </Text>
        </View>
        <Text
          style={{
            marginVertical: 5,
            fontSize: 16,
            flexDirection: 'row',
            fontWeight: 'bold',
          }}>
          {/*{driverName.route}: <Image source={my_location} /> --------------{' '}*/}
          <Image source={my_location} /> {driverName.route}
        </Text>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={green_circle} />
          <Text style={{fontSize: 14, marginHorizontal: 5}}>
            Current Bus Stop : Sandfilled
          </Text>
          <View
            style={{
              backgroundColor: '#679C4C',
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderRadius: 6,
            }}>
            <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>
              {capacity} Seats Vacant
            </Text>
          </View>
        </View>
        {isShowPassengerModal && renderSelectPassenger()}
        {isShowBusStopsList ? renderBusStopsList() : renderDropOffPassenger()}
        {renderReciptsModal()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
  },
  renderBusStopHeaderCont: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#000',
    marginHorizontal: -20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  busStopHeader: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  oneBusStopCont: {
    flexDirection: 'row',
    height: 60,
    borderWidth: 0,
    alignItems: 'center',
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
)(OnlineBottomContent);

import React, {useState} from 'react';
import {View, Image, Modal, FlatList, StyleSheet} from 'react-native';
import {Text, Button} from '../../Components';
import {my_location, green_circle, arrow_down} from '../../images';
import SelectPassenger from './SelectPassenger';
import SetPassengerModal from './SetPassengerModal';
import SignUpUser from './SignUpUser';
import ReciptsModal from './ReciptModal';

const OnlineBottomContent = ({}) => {
  const [isShowBusStopsList, setIsShowBusStopsList] = useState(true);
  const [isShowSelectPassenger, setIsShowSelectPassenger] = useState(true);
  const [isShowSetPassenger, setIsShowSetPassenger] = useState(false);
  const [isShowPassengerModal, setIsShowPassengerModal] = useState(false);
  const [isShowSignUpUser, setIsShowSignUpUser] = useState(false);
  const [isShowReciptsModal, setIsShowReciptsModal] = useState(false);

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
          data={[1, 2, 2, 3, 3, 1, 1, 1, 1, 1]}
          renderItem={() => (
            <View style={styles.oneBusStopCont}>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <Text style={{width: 25, fontSize: 16}}>01</Text>
                <Text style={{fontSize: 16}}>Akinloye</Text>
              </View>
              <Text
                onPress={() => setIsShowBusStopsList(!isShowBusStopsList)}
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
                0
              </Text>
              <Text
                onPress={() => {
                  setIsShowSelectPassenger(true);
                  setIsShowPassengerModal(true);
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
        {[1, 1].map((x) => (
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
                <Text style={{fontSize: 12}}>Trip ID : 0001</Text>
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
                    Pin: 1234
                  </Text>
                </View>
              </View>
              <Text style={{fontSize: 20}}>₦240.00</Text>
            </View>
          </View>
        ))}

        <View style={{width: '50%', alignSelf: 'center', marginVertical: 10}}>
          <Button
            onPress={() => setIsShowReciptsModal(true)}
            text={'Drop All'}
          />
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
          <SignUpUser dismiss={dismiss} hideSignUpUser={hideSignUpUser} />
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
          Good afternoon, Abayomrunkoje
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Zone:</Text>
          <Text
            style={{fontWeight: 'bold', marginHorizontal: 10, fontSize: 16}}>
            01
          </Text>
          <Text style={{marginHorizontal: 10}}>|</Text>
          <Text style={{fontSize: 16}}>Area:</Text>
          <Text
            style={{fontWeight: 'bold', marginHorizontal: 10, fontSize: 16}}>
            Ikeja
          </Text>
        </View>
        <Text style={{marginVertical: 5, fontSize: 16, flexDirection: 'row'}}>
          Opebi: <Image source={my_location} /> --------------{' '}
          <Image source={my_location} /> Oluyole, Ojota
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
            Current Bus Stop : Bola llori
          </Text>
          <View
            style={{
              backgroundColor: '#679C4C',
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderRadius: 6,
            }}>
            <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>
              3 Seats Vacant
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
export default OnlineBottomContent;

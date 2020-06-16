import React from 'react';
import {View, TextInput} from 'react-native';
import {Text} from '..';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Input = ({label, value, style, placeholder, icon, onChangeText}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{color: '#7A869A', fontSize: 15, ...style}}>{label}</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#E6E6EB',
          marginVertical: 10,
          paddingHorizontal: 10,
        }}>
        <TextInput
          value={value}
          style={{flex: 1}}
          placeholder={placeholder}
          onChangeText={(inputText) => onChangeText(inputText)}
        />
        {icon && <AntDesign name={'check'} size={20} />}
      </View>
    </View>
  );
};
export default Input;

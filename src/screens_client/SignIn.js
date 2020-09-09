import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';

import Screen from '../components/Screen';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import TouchId from '../svg/touch-id.svg';
import FaceId from '../svg/face-id.svg';

import touchIdSvg from '../svg/touch-id.svg';

export default ({navigation}) => {
  const [phone, setPhone] = useState('');

  return (
    <Screen withoutHeader>
      <Logo />
      <Text style={style.title}>Вход</Text>
      <Input value={phone} onChange={setPhone} placeholder="Номер телефона" type='phone-pad'  />

      <View style={style.button}>
        <Button
          disabled={!phone.trim()}
          onClick={() => navigation.navigate('main_client')}>
          Далее
        </Button>
      </View>

      <TouchableOpacity
        style={{marginVertical:10, alignItems: 'center'}}
        onPress={() => navigation.navigate('signup_client')}>
        <Text style={style.altSignin__text}>Зарегистрироваться</Text>
      </TouchableOpacity>

      {Platform.OS == 'ios' ? (
        <View>
          <TouchableOpacity
        style={style.altSignin}
        onPress={() => navigation.navigate('touchid-activate_client')}>
        <Text style={style.altSignin__text}>Войти с помощью Touch ID</Text>
        <TouchId />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.altSignin}
        onPress={() => navigation.navigate('faceid-activate_client')}>
        <Text style={style.altSignin__text}>Войти с помощью Face ID</Text>
        <FaceId />
      </TouchableOpacity>
        </View>
      ) : null}
      
    </Screen>
  );
};

const style = new StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 20,
  },
  button: {
    marginVertical: 20,
  },
  altSignin: {
    alignItems: 'center',
    marginVertical: 30,
  },
  altSignin__text: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Screen from '../components/Screen';
import Button from '../components/Button';
import TouchIdIcon from '../svg/touch-id.svg';

export default ({navigation}) => {
  const [phone, setPhone] = useState('');

  return (
    <Screen withoutHeader>
      <View style={style.info}>
        <TouchIdIcon />
        <Text style={style.info__title}>Активация Touch ID</Text>
        <Text style={style.info__descr}>
          Используйте Ваш Touch ID в качестве быстрого входа приложение!
        </Text>
      </View>

      <Button onClick={() => navigation.navigate('main_driver')}>
        Использовать Touch ID
      </Button>
      <Button onClick={() => navigation.goBack()} withoutBkg>
        Спасибо, не надо
      </Button>
    </Screen>
  );
};

const style = new StyleSheet.create({
  info: {
    alignItems: 'center',
    marginTop: 100,
  },
  info__title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  info__descr: {
    textAlign: 'center',
    marginBottom: 30,
  },
});

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Screen from '../components/Screen';
import Button from '../components/Button';
import FaceIdIcon from '../svg/face-id.svg';

export default ({navigation}) => {
  const [phone, setPhone] = useState('');

  return (
    <Screen withoutHeader>
      <View style={style.info}>
        <FaceIdIcon />
        <Text style={style.info__title}>Активация Face ID</Text>
        <Text style={style.info__descr}>
          Используйте Ваш Face ID в качестве быстрого входа приложение!
        </Text>
      </View>

      <Button onClick={() => navigation.navigate('main_client')}>
        Использовать Face ID
      </Button>
      <Button withoutBkg onClick={() => navigation.goBack()}>
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

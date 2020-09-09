import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Screen from '../components/Screen';
import Button from '../components/Button';
import CodeInput from '../components/CodeInput';

export default ({navigation}) => {
  const [code, setCode] = useState('');
  useEffect(() => {
    code.length == 5 && navigation.navigate('main_driver');
  }, [code]);

  return (
    <Screen withoutHeader>
      <Text style={style.title}>SMS-Код</Text>
      <CodeInput onChange={setCode} />

      <Text style={style.descr}>
        На ваш телефон был выслан SMS-Код, введите его в поле выше.
      </Text>
      <Button withoutBkg>
        <Text style={style.button__text}>Отправить SMS-Код повторно</Text>
      </Button>
    </Screen>
  );
};

const style = new StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 80,
  },
  descr: {
    textAlign: 'center',
    marginVertical: 30,
    lineHeight: 24,
  },
  button__text: {
    color: '#EEC946',
  },
});

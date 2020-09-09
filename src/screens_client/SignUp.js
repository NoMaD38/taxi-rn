import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Screen from '../components/Screen';
import Logo from '../components/Logo';
import Input from '../components/Input';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';

export default ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const [personal, setPersonal] = useState(false);
  const [smoke, setSmoke] = useState(false);

  const isDisabled =
    !name.trim() || !surname.trim() || !phone.trim() || !personal;

  return (
    <Screen withoutHeader>
      <Logo />
      <Text style={style.title}>Регистрация</Text>
      <Input value={name} onChange={setName} placeholder="Имя" />
      <Input value={surname} onChange={setSurname} placeholder="Фамилия" />
      <Input value={phone} onChange={setPhone} placeholder="Номер телефона" type='phone-pad'/>
      <Input
        value={code}
        onChange={setCode}
        placeholder="Специальный код (Телефон)"
      />

      <CheckBox
        value={personal}
        onChange={setPersonal}
        title="Я согласен(на) на обработку персональных данных"
      />
      <CheckBox value={smoke} onChange={setSmoke} title="Курю" />

      <View style={style.button}>
        <Button
          disabled={isDisabled}
          onClick={() => navigation.navigate('sms-code_client')}>
          Далее
        </Button>
      </View>
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
});

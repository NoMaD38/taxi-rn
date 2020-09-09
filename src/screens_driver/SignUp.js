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
  const [patr, setPatr] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const [personal, setPersonal] = useState(false);
  const [rules, setRules] = useState(false);

  const isDisabled =
    !name.trim() ||
    !surname.trim() ||
    !patr.trim() ||
    !phone.trim() ||
    !email.trim() ||
    !personal ||
    !rules;

  return (
    <Screen withoutHeader>
      <Logo />
      <Text style={style.title}>Регистрация</Text>
      <Input value={name} onChange={setName} placeholder="Имя" />
      <Input value={surname} onChange={setSurname} placeholder="Фамилия" />
      <Input value={patr} onChange={setPatr} placeholder="Отчество" />
      <Input value={phone} onChange={setPhone} placeholder="Номер телефона" type='phone-pad'/>
      <Input value={email} onChange={setEmail} placeholder="E-mail" />
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
      <CheckBox
        value={rules}
        onChange={setRules}
        title="Я согласен(на) с правилами сервиса"
      />

      <View style={style.button}>
        <Button
          disabled={isDisabled}
          onClick={() => navigation.navigate('sms-code_driver')}>
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

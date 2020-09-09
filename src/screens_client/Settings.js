import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Screen from '../components/Screen'
import Input from '../components/Input'
import Switch from '../components/Switch'
import More from '../components/More'

export default ({navigation}) => {
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ opt1, setOpt1 ] = useState(false);

  return (<Screen headerTitle="Настройки" onBack={() => navigation.goBack()}>
    <Input value={name} onChange={setName} placeholder="Имя" />
    <Input value={surname} onChange={setSurname} placeholder="Фамилия" />
    <Input value={email} onChange={setEmail} placeholder="E-mail" />
    <Input value={phone} onChange={setPhone} placeholder="Номер телефона" type='phone-pad'/>
    <Switch value={opt1} onChange={setOpt1} title="Показывать пробки"/>
    <More onClick={() => {}}>
      <Text>Русский</Text>
    </More>
  </Screen>);
}

const style = new StyleSheet.create({

});

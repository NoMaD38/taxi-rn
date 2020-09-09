import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Screen from '../components/Screen'
import Input from '../components/Input'
import Button from '../components/Button'

export default ({navigation}) => {
  const [ address, setAddress ] = useState('');

  return (<Screen withoutHeader>
    <Text style={style.title}>Смена конечного пункта</Text>

    <Input value={address} onChange={setAddress} placeholder="Введите адрес" />
    <Button onClick={() => navigation.goBack()} withMargin>Изменить</Button>
  </Screen>);
}

const style = new StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20
  }
});

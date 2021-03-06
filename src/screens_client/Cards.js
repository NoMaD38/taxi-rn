import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import Screen from '../components/Screen'
import Button from '../components/Button'
import PaymentSelect from '../components/PaymentSelect'

const methods = [
  { method: 0, number: '*3556' },
  { method: 1, number: '*6499' },
  { method: 2, number: '' },
  { method: 3, number: '' },
  { method: 4, number: '' }
]

export default ({navigation}) => {
  return (<Screen headerTitle="Способ оплаты" onBack={() => navigation.goBack()}>
    <PaymentSelect methods={methods} onChange={() => {}} />

    <View style={style.bottom}>
      <Button onClick={() => navigation.navigate('add-cards_client')}>Добавить</Button>
    </View>
  </Screen>);
}

const style = new StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 85,
    justifyContent: 'space-between'
  },
  bottom: {
    // position: 'absolute',
    // bottom: 0
    marginTop: 20
  }
});

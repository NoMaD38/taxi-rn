import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'
import PaymentSelect from '../../components/PaymentSelect'

const methods = [
  { method: 0, number: '*3556' },
  { method: 1, number: '*6499' },
  { method: 2, number: '' },
  { method: 3, number: '' },
  { method: 4, number: '' }
]

export default ({navigation}) => {
  const [ payMethod, setPayMethod ] = useState(0);

  return (<BottomScreen withPadding autoHeight>
      <Text style={style.title}>Тип оплаты</Text>
      <Text style={style.text}>Выберите тип оплаты</Text>

      <PaymentSelect methods={methods} onChange={setPayMethod} />
    </BottomScreen>);
}

const style = new StyleSheet.create({
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#101010',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 30
  },
});

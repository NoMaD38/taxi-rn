import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import Screen from '../components/Screen'
import Input from '../components/Input'
import Button from '../components/Button'

export default ({navigation}) => {
  const [ number, setNumber ] = useState('');
  const [ date, setDate ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ code, setCode ] = useState('');

  const changeNumber = (e) =>{
    let a = e.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setNumber(a)
  }

  return (<Screen headerTitle="Добавление карты" onBack={() => navigation.goBack()}>
    <Input value={number} onChange={e=>changeNumber(e)} placeholder="0000 0000 0000 0000" maxLength={19} type='phone-pad'/>

    <View style={style.inputCont}>
      <Input style={style.inputCont__input} value={date} onChange={setDate} placeholder="03" maxLength={2} type='phone-pad'/>
      <Input style={style.inputCont__input} value={month} onChange={setMonth} placeholder="21" maxLength={2} type='phone-pad'/>
      <Input style={style.inputCont__input} value={code} onChange={setCode} placeholder="CVV" maxLength={3} secure type='phone-pad'/>
    </View>

    <View style={style.bottom}>
      <Button>Сохранить</Button>
    </View>
  </Screen>);
}

const style = new StyleSheet.create({
  inputCont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputCont__input: {
    width: '30%',
    // /textAlign: 'center'
  },
  bottom: {
    marginTop: 20
  }
});

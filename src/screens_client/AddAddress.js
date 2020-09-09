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
  const [ name, setName ] = useState('');
  const [ addr1, setAddr1 ] = useState('');
  const [ addr2, setAddr2 ] = useState('');

  return (<Screen headerTitle="Мои адреса" onBack={() => navigation.goBack()}>
    <Input value={name} onChange={setName} placeholder="Название" />
    <View style={style.rowCont}>
      <Input value={addr1} onChange={setAddr1} placeholder="Адрес"
        withoutBorder style={{width: '80%', marginVertical: 0}} />
      <Button withoutBkg style={style.mapButton}
        onClick={() => navigation.navigate('main_client')}>Карта</Button>
    </View>
    <Input value={addr2} onChange={setAddr2} placeholder="Подъезд" type='phone-pad'/>

    <Button withMargin onClick={() => navigation.goBack()}>Сохранить</Button>
    <Button withMargin onClick={() => navigation.goBack()} withoutBkg withBorder>Удалить адрес</Button>
  </Screen>);
}

const style = new StyleSheet.create({
  item: {
  },
  item__title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5
  },
  item__descr: {
    fontSize: 12
  },
  rowCont: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(16,16,16,0.6)',
    alignItems: 'center'
  },
  mapButton: {
    width: '20%',
    borderLeftWidth: 1,
    borderLeftColor: '#C4C4C4',
    borderRadius: 0,
    height: 30
  }
});

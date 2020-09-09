import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import Screen from '../components/Screen'
import Button from '../components/Button'
import Card from '../components/Card'
import Table from '../components/Table'

export default ({navigation}) => {
  const [ code, setCode ] = useState('');

  return (<Screen headerTitle="Профиль" onBack={() => navigation.goBack()}>
    <Card withoutPadding>
      <View style={style.avatarCont}><Image style={style.avatar} source={null} /></View>

      <Text style={style.name}>Петров Петр Петрович</Text>

      <View style={style.info}>
        <Table items={[
          [ 'Трезвый водитель:', 'Подтвержден' ],
          [ 'Моб.Телефон:', '+7 (956) 789-63-47' ]
        ]} />
      </View>
    </Card>
    <Button>Сменить фото</Button>
  </Screen>);
}

const style = new StyleSheet.create({
  avatarCont: {
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 100,
    width: 80,
    height: 80,
    marginVertical: 20,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
  },
  info: {
    borderTopColor: 'rgba(61,61,61,0.4)',
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 20,
  },
});

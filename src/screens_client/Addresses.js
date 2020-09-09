import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Screen from '../components/Screen'
import More from '../components/More'
import Button from '../components/Button'

export default ({navigation}) => {
  return (<Screen headerTitle="Мои адреса" onBack={() => navigation.goBack()}>
    <More onClick={() => navigation.navigate('address_client')}>
      <View style={style.item}>
        <Text style={style.item__title}>Аэропорт</Text>

        <Text style={style.item__descr}>г. Пермь, Спешилова 10</Text>
      </View>
    </More>

    <More onClick={() => navigation.navigate('address_client')}>
      <View style={style.item}>
        <Text style={style.item__title}>Дом</Text>

        <Text style={style.item__descr}>г. Пермь, Ленина 10</Text>
      </View>
    </More>

    <Button withMargin onClick={() => navigation.navigate('add-address_client')} >Добавить адрес</Button>
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
});

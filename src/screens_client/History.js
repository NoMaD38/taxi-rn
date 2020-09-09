import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import Map from '../components/Map'

import FromTo from '../components/FromTo'

const history = [
  {
    from: 'Ленина, 30',
    to: 'Луначарского, 5',
    date: '29 Марта, в 22:01',
    price: 203,
  },
  {
    from: 'Ленина, 30',
    to: 'Луначарского, 5',
    date: '29 Марта, в 22:01',
    price: 203,
  },
  {
    from: 'Ленина, 30',
    to: 'Луначарского, 5',
    date: '29 Марта, в 22:01',
    price: 203,
  }
]

export default ({navigation}) => {

  return (<Screen headerTitle="История поездок" onBack={() => navigation.goBack()}>
    {history.map((h, i) => (
      <Card key={i} withoutPadding>
        <Map width={"100%"} height={180} noInteractive/>

        <View style={style.item__cont}>
          <Text style={style.item__date}>{h.date}</Text>
          <Text style={style.item__price}>{h.price} ₽</Text>
        </View>

        <FromTo from={h.from} to={h.to} withoutBorder />
      </Card>
    ))}
  </Screen>);
}

const style = new StyleSheet.create({
  item__cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  item__date: {
    fontSize: 18,
    fontWeight: '600'
  },
  item__price: {
    fontSize: 18,
    fontWeight: '600'
  },
  item__fromTo: {
    flexDirection: 'row',
    margin: 20
  },
  item__fromTo__cont: {
    height: 54,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  item__from: {

  },
  item__to: {

  }
});

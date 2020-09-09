import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import Screen from '../components/Screen'
import Orders from '../components/Orders'

const orders = [
  {
    from: 'ул. Попова 30',
    to: 'ул. Ленина 10',
    price: 203,
    distantion: 11.6
  },
  {
    from: 'ул. Попова 30',
    to: 'ул. Ленина 10',
    price: 360,
    distantion: 11.6
  },
  {
    from: 'ул. Попова 30',
    to: 'ул. Ленина 10',
    price: 1500,
    distantion: 11.6
  }
];
const PRICE_LOW = 300;
const PRICE_MIDDLE = 600;


export default ({navigation}) => {

  return (<Screen headerTitle="Все заказы" onBack={() => navigation.goBack()}>

    <Orders orders={orders}
      priceLowLimit={PRICE_LOW}
      priceMiddleLimit={PRICE_MIDDLE}
      onAccept={(ind) => {}}/>

  </Screen>);
}

const style = new StyleSheet.create({

});

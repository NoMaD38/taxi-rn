import React from 'react';
import {StyleSheet} from 'react-native';

import Orders from '../../components/Orders';
import BottomScreen from '../../components/BottomScreen';

const orders = [
  {
    from: 'ул. Попова 30',
    to: 'ул. Ленина 10',
    price: 203,
    distantion: 11.6,
  },
  {
    from: 'ул. Попова 30',
    to: 'ул. Ленина 10',
    price: 360,
    distantion: 11.6,
  },
  {
    from: 'ул. Попова 30',
    to: 'ул. Ленина 10',
    price: 1500,
    distantion: 11.6,
  },
];
const PRICE_LOW = 300;
const PRICE_MIDDLE = 600;

export default ({navigation}) => {
  return (
    <BottomScreen>
      <Orders
        orders={orders}
        priceLowLimit={PRICE_LOW}
        priceMiddleLimit={PRICE_MIDDLE}
        onAccept={() => {}}
      />
    </BottomScreen>
  );
};

const style = new StyleSheet.create({});

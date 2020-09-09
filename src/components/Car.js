import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text
} from 'react-native'

import Card from './Card'

import car1 from '../img/car-1.png'
import car2 from '../img/car-2.png'
import car3 from '../img/car-3.png'
import car4 from '../img/car-4.png'
import car5 from '../img/car-5.png'
import car6 from '../img/car-6.png'
import car7 from '../img/car-7.png'

const CARS = [
  { img: car1, title: 'Эконом' },
  { img: car2, title: 'Комфорт' },
  { img: car3, title: 'Комфорт +' },
  { img: car4, title: 'Бизнес' },
  { img: car5, title: 'Минивэн' },
  { img: car6, title: 'Грузовой' },
  { img: car7, title: 'Курьер' },
]

export default ({onClick, type, price, active}) => {
  return (
    <View style={[ style.box, active ? style.box_active : undefined ]}>
      <TouchableWithoutFeedback onPress={onClick}>
        <View style={{flex: 1}}>
          <Text style={style.box__title}>{CARS[type].title}</Text>
          <Image style={style.box__img} source={CARS[type].img} />
          <Text style={style.box__price}>{price}₽</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const style = new StyleSheet.create({
  box: {
    width: 120,
    height: 100,
    margin: 5,
    padding: 5,
    opacity: 0.5,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  box_active: {
    opacity: 1,
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 2,
  },
  box__title: {
    fontSize: 20,
    color: '#101010',
    textAlign: 'center',
    flex: 1
  },
  box__img: {
    width: '100%',
    height: 30,
    resizeMode: 'contain',
    flex: 1
  },
  box__price: {
    fontSize: 18,
    color: '#3D3D3D',
    fontWeight: '500',
    textAlign: 'center',
    flex: 1
  }
});

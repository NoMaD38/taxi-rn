import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'

import SunIcon from '../../svg/sun.svg'
import StarIcon from '../../svg/star.svg'
import StarSelectedIcon from '../../svg/star_selected.svg'

export default ({navigation}) => {
  const [ rate, setRate ] = useState(0);
  const [ price, setPrice ] = useState(0);

  const bottom = (<Button onClick={() => {}}>Готово</Button>);

  return (<BottomScreen bottomContent={bottom} autoHeight withPadding>
    <View style={style.box}>
      <SunIcon />
      <Text style={style.title}>Спасибо за поездку, удачного дня!</Text>

      <Text style={style.rate__title}>Вам понравилась поездка ?</Text>
      <View style={style.rate}>
        <TouchableWithoutFeedback onPress={() => setRate(1)}>
          { rate < 1 ? <StarIcon /> : <StarSelectedIcon /> }
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setRate(2)}>
          { rate < 2 ? <StarIcon /> : <StarSelectedIcon /> }
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setRate(3)}>
          { rate < 3 ? <StarIcon /> : <StarSelectedIcon /> }
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setRate(4)}>
          { rate < 4 ? <StarIcon /> : <StarSelectedIcon /> }
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setRate(5)}>
          { rate < 5 ? <StarIcon /> : <StarSelectedIcon /> }
        </TouchableWithoutFeedback>
      </View>
      <View style={style.price}>
        <Text style={style.price__label}>К оплате:</Text>
        <Text style={style.price__value}>{price} ₽</Text>
      </View>
    </View>
  </BottomScreen>);
}

const style = new StyleSheet.create({
  box: {
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    margin: 40,
    textAlign: 'center'
  },
  rate__title: {
    fontSize: 16
  },
  rate: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(61,61,61,0.4)',
    padding: 20
  },
  rate__star: {

  },
  price: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  price__label: {
    fontSize: 20
  },
  price__value: {
    fontSize: 20,
    fontWeight: '600'
  }
});

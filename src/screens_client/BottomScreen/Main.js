import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'
import FromTo from '../../components/FromTo'
import Cars from '../../components/Cars'
import More from '../../components/More'
import Switch from '../../components/Switch'

const FROM_ADDR = 'Ленина, 30';
const TO_ADDR = 'Луначарского, 5';
const CARS = [
  { type: 0, price: '300' },
  { type: 1, price: '1100' },
  { type: 2, price: '1300' },
  { type: 3, price: '2600' },
  { type: 4, price: '1300' },
  { type: 5, price: '1500' },
  { type: 6, price: '340' },
]

export default ({navigation}) => {
  const [ option1, setOption1 ] = useState(false);
  const [ option2, setOption2 ] = useState(false);
  const [ option3, setOption3 ] = useState(false);

  const [ option4, setOption4 ] = useState(false);
  const [ option5, setOption5 ] = useState(false);

  const bottom = (<View style={style.bottom}>
    <View style={style.bottom__button}>
      <Button onClick={() => {}}>Заказать</Button>
    </View>

    <View style={style.bottom__button}>
      <Button onClick={() => {}} withoutBkg withBorder>Трезвый водитель</Button>
    </View>
  </View>);

  return (<BottomScreen bottomContent={bottom} initialHeight={320} minHeight={200}>
    <FromTo from={FROM_ADDR} to={TO_ADDR}
      payMethod={0} onPayClick={() =>navigation.navigate('cards_client')}/>
    <Cars items={CARS} />

    <View style={style.controls}>
      <More onClick={() => {}}>
        <Text>Комментарий водителю</Text>
      </More>

      <More onClick={() => {}}>
        <Text>Заказ другому человеку</Text>
      </More>

      <Text style={style.title}>Пожелания</Text>
      <Switch value={option1} onChange={setOption1} title="От двери до двери" />
      <Switch value={option2} onChange={setOption2} title="Безопасность ребенка" />
      <Switch value={option3} onChange={setOption3} title="Детское кресло" />

      <Text style={style.title}>Подача автомобиля</Text>
      <Switch value={option4} onChange={setOption4} title="Подать через 2 минуты" />
      <Switch value={option5} onChange={setOption5} title="Подать через 10 минут" />
    </View>

  </BottomScreen>);
}

const style = new StyleSheet.create({
  controls: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottom__button: {
    width: '48%'
  }
});

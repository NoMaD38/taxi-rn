import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native'

import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'

import SunIcon from '../../svg/sun.svg'
import StarIcon from '../../svg/star.svg'
import StarSelectedIcon from '../../svg/star_selected.svg'

import { payMethods } from '../../const'

export default ({navigation}) => {
  const [ option1, setOption1 ] = useState(true);
  const [ payMethod, setPayMethod ] = useState(0);

  const PayMethodLogo = payMethods[payMethod].logo;

  return (<BottomScreen initialHeight={320} minHeight={145}>
    <View style={style.box}>
      <Text style={style.title}>Ожидание 2 мин</Text>
      <Text style={style.car}>Желтый Волга Р 546 НО 777</Text>
    </View>

    <View style={style.box}>
      <View style={style.driver}>
        <Image style={style.driver__photo} source={null} />

        <View>
          <Text style={style.driver__name}>Попов Дмитрий Олегович</Text>

          <CheckBox value={option1} onChange={() => {}} title="Трезвый водитель" reverse />
        </View>
      </View>

      <View style={style.driver__buttons}>
        <Button style={style.driver__button} onClick={() => navigation.navigate('chat_client')}>Чат с водителем</Button>

        <Button withoutBkg withBorder style={style.driver__button}>Позвонить</Button>
      </View>
    </View>

    <View style={style.box}>
      <View style={style.payMethod}>
        <Text>Способ оплаты</Text><PayMethodLogo />
      </View>
    </View>

    <View style={style.box}>
      <Button withoutBkg withBorder withMargin onClick={() => {}}>Отменить поездку</Button>
      <Button withoutBkg withMargin onClick={() => navigation.navigate('chat')}>Обратиться в поддержку</Button>
    </View>
  </BottomScreen>);
}

const style = new StyleSheet.create({
  box: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(61,61,61,0.4)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  car: {
    textAlign: 'center',
    color: '#3D3D3D'
  },
  driver: {
    flexDirection: 'row',
    marginBottom: 30
  },
  driver__photo: {
    borderRadius: 100,
    width: 60,
    height: 60,
    marginRight: 20
  },
  driver__name: {
    fontSize: 20,
    fontWeight: '500',
  },
  driver__buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  driver__button: {
    width: '48%'
  },
  payMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

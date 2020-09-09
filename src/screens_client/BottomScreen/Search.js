import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native'

import Input from '../../components/Input'
import BottomScreen from '../../components/BottomScreen'

const list = [
  { letter: 'a', list: [
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'b_surname' }
  ] },
  { letter: 'b', list: [
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'b_surname' }
  ] },
  { letter: 'z', list: [
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'b_surname' },
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'b_surname' },
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'a_surname' },
    { name: 'name', surname: 'b_surname' }
  ] },
]

export default ({navigation, fadeAnim, setInterface}) => {
  const [ search, setSearch ] = useState('');
  return (
  <Animated.View>
    <BottomScreen autoHeight minHeight={200} setInterface={setInterface}>
        <Input value={search} onChange={setSearch} placeholder="Введите имя или номер"  style={style.input}/>
        { list.map(({letter, list}, ind) => (<View key={ind}>
          <View style={style.list__header}>
            <Text style={style.list__header__text}>{letter.toUpperCase()}</Text>
          </View>
          { list.map(({name, surname}, ind) => (
            <View key={ind} style={style.list__item}>
              <Text style={style.list__item__text}>{`${name} ${surname}`}</Text>
            </View>
          )) }
        </View>)) }
    </BottomScreen>
  </Animated.View>
  )
}

const style = new StyleSheet.create({
  input: {
    marginHorizontal: 20
  },
  list__header: {
    backgroundColor: 'rgba(61,61,61,0.2)',
    paddingHorizontal: 15
  },
  list__header__text: {
    fontSize: 17,
    fontWeight: '700'
  },
  list__item: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  list__item__text: {
    fontSize: 17,
  }
});

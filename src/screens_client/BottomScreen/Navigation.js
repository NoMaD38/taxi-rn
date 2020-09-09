import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Button from '../../components/Button'

import LocationIcon from '../../svg/location.svg'
import SearchIcon from '../../svg/search.svg'

const bookmarks = [
  { name: 'Дом', coords: {} },
  { name: 'Аэропорт', coords: {} },
  { name: 'Работа', coords: {} }
]

export default ({navigation, setInterface, setCoords}) => {
  return (<View style={style.box}>
    <View style={style.box__cont}>
      <Button style={style.box__button} bold noText onClick={() => {
        setInterface(2)
      }}>
        <View style={{marginRight: 5}}><SearchIcon /></View>
        <Text style={{fontWeight: '700', fontSize: 18}}>Куда ?</Text>
      </Button>

      <Button style={style.box__button} bold noText onClick={() => setCoords({})}>
        <LocationIcon />
      </Button>
    </View>

    <View style={style.box__cont}>
      { bookmarks.map(({name, coords}, ind) => (
        <Button key={ind} style={style.box__button} bold onClick={() => setCoords(coords)}>
        {name}
      </Button>
      )) }
    </View>
  </View>);
}

const style = new StyleSheet.create({
  box: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20
  },
  box__button: {
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 2,
  },
  box__cont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import SelectList from './SelectList'

import { payMethods } from '../const'

export default ({onChange, methods}) => {
  return (
    <SelectList onChange={onChange} onlyOne>
        { methods.map(({method, number}, ind) => {
          var m = payMethods[method];
          var Logo = m.logo;
          return (<View key={ind} style={style.item}>
            { Logo ? <Logo /> : <Text>{m.name}</Text> }
            <Text>{number}</Text>
          </View>)
        }) }
    </SelectList>);
}

const style = new StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 85,
    justifyContent: 'space-between'
  }
});

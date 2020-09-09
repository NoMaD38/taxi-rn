import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

import FromToIcon from '../svg/from-to.svg'
import { payMethods } from '../const'

export default ({from, to, withoutBorder, payMethod, onPayClick}) => {
  var Logo;
   if( payMethod !== undefined ) Logo = payMethods[payMethod].logo;

  return (<View style={style.fromTo}>
    <FromToIcon />
    <View style={style.fromTo__cont}>
      <View style={[
          style.fromTo__addr,
          style.fromTo__from,
          withoutBorder ? style.fromTo__from_withoutBorder : undefined
        ]}>
        <Text>{from}</Text>
        { payMethod !== undefined && Logo ?
          <TouchableWithoutFeedback onPress={onPayClick}><Logo /></TouchableWithoutFeedback>
          : undefined }
      </View>
      <View style={[ style.fromTo__addr, style.fromTo__to ]}><Text>{to}</Text></View>
    </View>
  </View>
  );
}

const style = new StyleSheet.create({
  fromTo: {
    flexDirection: 'row',
    margin: 20,
  },
  fromTo__cont: {
    height: 54,
    justifyContent: 'space-between',
    paddingLeft: 10,
    flex: 1
  },
  fromTo__addr: {
    height: 27,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fromTo__from: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(61,61,61,0.4)',
  },
  fromTo__from_withoutBorder: {
    borderBottomColor: 'transparent',
  },
  fromTo__to: {
    alignItems: 'flex-end'
  }
});

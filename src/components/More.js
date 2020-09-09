import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text
} from 'react-native'

import MoreIcon from '../svg/more.svg'

export default ({children, onClick, noBorder}) => {
  return (<TouchableWithoutFeedback onPress={onClick}>
    <View style={[ style.box, noBorder ? style.box_noBorder : undefined ]}>
      {children}
      <MoreIcon />
    </View>
  </TouchableWithoutFeedback>);
}

const style = new StyleSheet.create({
  box: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#rgba(16,16,16,0.6)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  box_noBorder: {
    borderBottomColor: 'transparent'
  },
});

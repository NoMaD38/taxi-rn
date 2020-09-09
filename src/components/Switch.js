import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text
} from 'react-native'

export default ({value, onChange, title, noBorder}) => {
  return (<TouchableWithoutFeedback onPress={() => onChange(!value)}>
    <View style={[ style.box, noBorder ? style.box_noBorder : undefined ]}>
      <Text style={style.title}>{title}</Text>

      <View style={[ style.switch, value ? style.switch_active : undefined ]}>
        <View style={[ style.switch__button, {left: value ? 20 : 0} ]} />
      </View>
    </View>
  </TouchableWithoutFeedback>);
}

const style = new StyleSheet.create({
  box: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#rgba(151,151,151,0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
  box_noBorder: {
    borderBottomColor: 'transparent'
  },
  title: {

  },
  switch: {
    width: 50,
    height: 30,
    borderRadius: 36,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#E5E5EA'
  },
  switch_active: {
    backgroundColor: '#EEC946',
    borderColor: '#EEC946',
  },
  switch__button: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    width: 26,
    height: 26,
    shadowOffset:{  width: 0,  height: 5,  },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.05)'
  },
});

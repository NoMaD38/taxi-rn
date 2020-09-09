import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import Check from '../svg/check.svg';

export default ({value, onChange, title, reverse}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={style.checkboxCont}>
        {reverse ? (
          <Text style={[style.title, {marginRight: 20}]}>{title}</Text>
        ) : (
          undefined
        )}

        <View
          style={[style.checkbox, value ? style.checkbox_active : undefined]}>
          {value ? <Check /> : undefined}
        </View>

        {!reverse ? (
          <Text style={[style.title, {marginLeft: 20}]}>{title}</Text>
        ) : (
          undefined
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = new StyleSheet.create({
  checkboxCont: {
    flexDirection: 'row',
    //alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox_active: {
    borderColor: 'transparent',
    backgroundColor: '#EEC946',
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
  },
});

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default () => {
  return (
    <View style={style.logo}>
      <Text style={style.logo__text_1}>Диспетчер </Text>
      <Text style={style.logo__text_2}>такси</Text>
    </View>
  );
}

const style = new StyleSheet.create({
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50
  },
  logo__text_1: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  logo__text_2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#EEC946'
  },
});

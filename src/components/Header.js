import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

import BackIcon from '../svg/header-back.svg'

export default ({children, onBack}) => {
  return (
    <View style={style.header}>
      <TouchableWithoutFeedback onPress={onBack}>
        <View style={style.backButton}><BackIcon /></View>
      </TouchableWithoutFeedback>

      <Text style={style.title}>{children}</Text>
    </View>
  );
}

const style = new StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#FFF',
    paddingLeft: 50,
    paddingRight: 20,
    paddingVertical: 10,
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2
  },
  backButton: {
    height: 30,
    width: 40,
    position: 'absolute',
    left: 10,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

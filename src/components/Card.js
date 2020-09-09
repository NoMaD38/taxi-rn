import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

export default ({children, withoutPadding}) => {
  return (
    <View style={[ style.card, withoutPadding ? undefined : {padding: 20} ]}>
      {children}
    </View>
  );
}

const style = new StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: '#FFF',
    shadowOffset:{  width: 0,  height: 5,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 2,
    borderRadius: 10,
  }
});

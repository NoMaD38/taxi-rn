import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text
} from 'react-native'

const formatDate = date => {
  var d = new Date(date);
  return `${d.getHours()}:${d.getMinutes()}`
}

export default ({data}) => {
  var _style = data.type ? style_outgoing : style_incoming;

  return (
    <View style={[ style.box, _style.box ]}>
      <View style={[ style.message, _style.message ]}>
          <Text style={[ style.message__text, _style.message__text ]}>{data.text}</Text>
        </View>
        <Text style={[ style.message__date, _style.message__date ]}>
          {formatDate(data.date)}
        </Text>
    </View>
  );
}

const style = new StyleSheet.create({
  box: {

  },
  message: {
    borderRadius: 10,
    padding: 10,
    maxWidth: '65%'
  },
  message__text: {

  },
  message__date: {
    fontSize: 12,
    color: '#3D3D3D',
    marginTop: 3
  }
});

const style_outgoing = new StyleSheet.create({
  box: {
    alignItems: 'flex-end'
  },
  message: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#EDEDED'
  },
  message__text: {
    color: '#101010'
  },
  message__date: {
    textAlign: 'right'
  }
});

const style_incoming = new StyleSheet.create({
  box: {

  },
  message: {
    backgroundColor: '#3D3D3D'
  },
  message__text: {
    color: '#FFF'
  },
  message__date: {

  }
});

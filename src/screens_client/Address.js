import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar
} from 'react-native'

import Screen from '../components/Screen'
import Map from '../components/Map'
import Button from '../components/Button'

export default ({navigation}) => {
  return (<Screen headerTitle="Мои адреса" onBack={() => navigation.goBack()} withoutPadding>
    <Map width="100%" height="100%" noInteractive/>

    <View style={style.bottom}>
      <Button onClick={() => navigation.goBack()}>Сохранить</Button>
    </View>
  </Screen>);
}

const style = new StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    padding: 20
  }
});

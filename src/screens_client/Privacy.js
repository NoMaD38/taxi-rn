import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Screen from '../components/Screen'
import More from '../components/More'

export default ({navigation}) => {
  return (<Screen headerTitle="Политика конфиденциальности" onBack={() => navigation.goBack()}>
    <More onClick={() => navigation.navigate('app-description_client')}>
      <Text>Описание приложения</Text>
    </More>
    <More onClick={() => navigation.navigate('terms-of-use_client')}>
      <Text>Пользовательское соглашение</Text>
    </More>
  </Screen>);
}

const style = new StyleSheet.create({

});

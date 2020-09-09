import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import PhotoInput from '../components/PhotoInput'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'

export default ({navigation}) => {
  const [ personal, setPersonal ] = useState(false);
  const [ rules, setRules ] = useState(false);

  return (<Screen headerTitle="Трезвый водитель" onBack={() => navigation.goBack()}>
    <Card withoutPadding>
      <PhotoInput onChange={() => {}}/>

      <View style={style.container}>
        <CheckBox value={personal} onChange={setPersonal} title="Я согласен(на) на обработку персональных данных" />
        <CheckBox value={rules} onChange={setRules} title="Я согласен(на) c правилами сервиса" />
      </View>
    </Card>

    <Button onClick={() => {}}>Подтвердить</Button>
  </Screen>);
}

const style = new StyleSheet.create({
  container: {
    padding: 10
  }
});

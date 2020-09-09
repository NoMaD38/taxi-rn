import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import BottomScreen from '../../components/BottomScreen'
import Button from '../../components/Button'

export default ({navigation}) => {
  return (<BottomScreen withPadding minHeight={280} maxHeight={280}>
      <Text style={style.title}>Отмена поездки</Text>
      <Text style={style.text}>Вы уверены, что хотите отменить поздку ?</Text>
      <View style={style.buttons}>
        <Button style={style.buttons__button} withoutBkg withBorder>Закрыть</Button>
        <Button style={style.buttons__button}>Отменить</Button>
      </View>
    </BottomScreen>);
}

const style = new StyleSheet.create({
   title: {
     fontSize: 29,
     fontWeight: 'bold',
     color: '#101010',
     marginBottom: 20
   },
   text: {
     fontSize: 16
   },
   buttons: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 70
   },
   buttons__button: {
     width: '48%'
   }
});

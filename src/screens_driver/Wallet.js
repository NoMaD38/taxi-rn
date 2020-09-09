import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import Table from '../components/Table'

export default ({navigation}) => {
  return (<Screen headerTitle="Кошелек" onBack={() => navigation.goBack()}>
    <Card>
      <Text style={style.card__title}>Заработано</Text>
      <Text style={style.card__value}>11.652 ₽</Text>
    </Card>

    <Card>
      <Text style={style.card__title}>На виртуальном кошельке</Text>
      <Text style={style.card__value}>10. 263 ₽</Text>
    </Card>

    <Card withoutPadding>
      <Text style={style.title}>Транзакции</Text>

      <View style={style.item}>
        <Table items={[
          [
            <Text style={style.item__date}>20.03.2020</Text>,
            <Text style={[style.item__amount, style.item__amount_plus]}>+203 ₽</Text>
          ],
          [ 'Карта', 'VISA *3556' ]
        ]} />
      </View>

      <View style={style.item}>
        <Table items={[
          [
            <Text style={style.item__date}>20.03.2020</Text>,
            <Text style={[style.item__amount, style.item__amount_minus]}>-1.373 ₽</Text>
          ],
          [ 'Карта', 'VISA *3556' ]
        ]} />
      </View>
    </Card>
  </Screen>);
}

const style = new StyleSheet.create({
  card__title: {
    textAlign: 'center',
    marginBottom: 10
  },
  card__value: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    color: '#3D3D3D'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    marginHorizontal: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(151,151,151,0.4)',
    padding: 20
  },
  item__date: {
    fontSize: 20,
    fontWeight: '500'
  },
  item__amount: {
    fontSize: 20,
    fontWeight: '500'
  },
  item__amount_plus: {
    color: '#65BE00'
  },
  item__amount_minus: {
    color: '#EB001B'
  }
});

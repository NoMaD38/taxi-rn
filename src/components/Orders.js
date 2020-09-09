import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

import Button from './Button'
import Table from './Table'

export default ({orders, onAccept, priceLowLimit, priceMiddleLimit}) => {
  const [ selected, setSelected ] = useState(null);

  return orders.map((o, i) => (
    <TouchableWithoutFeedback key={i} onPress={() => setSelected(selected === i ? null : i)}>
      <View style={style.item}>
        <Table items={[
          [
            `От: ${o.from}`,
            <Text style={[ style.item__price,
              o.price < priceLowLimit ? style.item__price_low :
                o.price < priceMiddleLimit ? style.item__price_middle :
                  style.item__price_high
              ]}>{`${o.price} ₽`}</Text>
          ],
          [
            `До: ${o.to}`,
            `${o.distantion} км`
          ]
        ]} rowStyle={style.item__row}/>
        {selected === i ? (
          <Button onClick={() => onAccept(i)}>Принять заказ</Button>
        ) : undefined}
      </View>
    </TouchableWithoutFeedback>
  ))
}

const style = new StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(151,151,151,0.4)',
    padding: 10
  },
  item__row: {
    marginVertical: 10,
  },
  item__price: {
    fontWeight: 'bold'
  },
  item__price_low: {
    color: '#6EC848'
  },
  item__price_middle: {
    color: '#101010'
  },
  item__price_high: {
    color: '#EB001B'
  },

});

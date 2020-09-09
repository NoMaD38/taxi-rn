import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default ({items, rowStyle}) => {
  return (
    <View style={style.table}>
      {items.map((it, i) => (
        <View key={i} style={[style.table__row, rowStyle]}>
          <View style={style.table__cell}>
            <Text style={style.table__cell__text}>{ it[0] }</Text>
          </View>

          <View style={style.table__cell}>
            <Text style={[style.table__cell__text, {textAlign: 'right'}]}>{ it[1] }</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const style = new StyleSheet.create({
  table: {

  },
  table__row: {
    flexDirection: 'row',
    marginVertical: 5
  },
  table__cell: {
    width: '50%'
  },
  table__cell__text: {
    color: '#101010',
  }
});

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'

import Car from './Car'

export default ({onClick, items}) => {
  const [ active, setActive ] = useState(0);

  return (<View style={style.container}>
    <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
      {items.map(({type, price}, ind) => (
        <Car key={ind} type={type} price={price}
          active={active === ind} onClick={() => setActive(ind)} />
      ))}
    </ScrollView>
  </View>);
}

const style = new StyleSheet.create({
  container: {
    height: 110,
    paddingHorizontal: 20
  }
});

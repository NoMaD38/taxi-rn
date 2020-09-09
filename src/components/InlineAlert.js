import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import Card from './Card'

export default ({children, display}) => {
  if( !display ) return (<></>);
  return (<View style={style.box}>
    <Card withoutPadding>
      <View style={{padding: 10}}>{children}</View>
    </Card>
  </View>);
}

const style = new StyleSheet.create({
  box: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
    zIndex: 90,
    elevation: 90,
  }
});

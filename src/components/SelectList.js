import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native'

import CheckBox from './CheckBox'

export default ({children, onChange, onlyOne}) => {
  const [ selected, setSelected ] = useState( new Array(children.length).fill(false) );

  const _onChange = ind => {
    var _selected;
    if( onlyOne ){
      _selected = new Array(children.length).fill(false);
      _selected[ind] = true;
      onChange(ind);
    } else {
      selected[ind] = !selected[ind];
      _selected = new Array(...selected);
      onChange(_selected);
    }
    setSelected(_selected);
  }
  return (
    <View style={style.list}>
      {children.map((it, i) => (
        <TouchableWithoutFeedback key={i} onPress={() => _onChange(i)}>
          <View style={style.list__item}>
            {it}
            <CheckBox value={selected[i]} onChange={() => _onChange(i)} reverse/>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const style = new StyleSheet.create({
  list: {

  },
  list__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(151,151,151,0.4)',
    borderWidth: 1,
    borderColor: 'transparent'
  }
});

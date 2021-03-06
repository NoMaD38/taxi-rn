import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native'

const CODE_COUNT = 5;

export default ({value, onChange}) => {
  const [ values, setValues ] = useState( new Array(CODE_COUNT) );
  const [ focus, setFocus ] = useState(0);

  return (<View style={style.container}>
    {
      new Array(CODE_COUNT).fill(null).map((_, i) =>
        <TextInput key={i} style={style.input}
        keyboardType="number-pad"
        maxLength={1}
        selectTextOnFocus
        textContentType="oneTimeCode"
        ref={r => r && i === focus ? r.focus() : undefined}
        value={values[i]}
        onChangeText={t => {
          values[i] = t.slice(0, 1);
          setValues(values);
          setFocus(i + 1);
          onChange(values.join(''));
        }}/>)
    }
  </View>);
}

const style = new StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(16,16,16,0.4)',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '500',
    color: '#000',
    width: `${(100 / CODE_COUNT) - (1 * CODE_COUNT)}%`
  }
});

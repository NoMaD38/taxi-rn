import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native'

export default ({value, onChange, placeholder, style, secure, withoutBorder, type, maxLength}) => {
  return (
    <TextInput style={[styles.input, withoutBorder ? styles.input_withoutBorder : undefined, style]}
      keyboardType={type && type}
      maxLength={maxLength && maxLength}
      value={secure ? '•'.repeat(value.length) : value} onChangeText={onChange}
      placeholder={placeholder} placeholderTextColor={"rgba(61,61,61,0.4)"}/>
  );
}

const styles = new StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(16,16,16,0.6)',
    height: 50,
    padding: 10,
    marginVertical: 10,
    color: '#3D3D3D'
  },
  input_withoutBorder: {
    borderBottomColor: 'transparent'
  }
});

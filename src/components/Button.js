import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';

export default ({
  children,
  onClick,
  disabled,
  withoutBkg,
  withBorder,
  withMargin,
  style,
  bold,
  noText,
}) => {
  const onPress = () => {
    if (!disabled && onClick) onClick();
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          style,
          disabled ? styles.button_disabled : undefined,
          withoutBkg ? styles.button_withoutBkg : undefined,
          withBorder ? styles.button_withBorder : undefined,
          withMargin ? styles.button_withMargin : undefined,
        ]}>
        {noText ? (
          children
        ) : (
          <Text
            style={[
              styles.button__text,
              bold ? styles.button__text_bold : undefined,
            ]}>
            {children}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = new StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#EEC946',
    borderRadius: 10,
    justifyContent: 'center',
  },
  button_disabled: {
    opacity: 0.3,
  },
  button_withoutBkg: {
    backgroundColor: 'transparent',
  },
  button_withBorder: {
    borderWidth: 2,
    borderColor: '#101010',
  },
  button_withMargin: {
    marginVertical: 10,
  },
  button__text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#101010',
  },
  button__text_bold: {
    fontWeight: '700',
  },
});

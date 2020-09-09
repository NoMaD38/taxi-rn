import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Screen from '../components/Screen';
import Button from '../components/Button';
import img from '../img/screenshot.png';

export default ({navigation}) => {
  return (
    <Screen withoutHeader>
      <View style={{ justifyContent:'center', alignItems:'center'}}>
        <Image style={style.img} source={img} />
      </View>
      
      <Text style={style.title}>Вы можете зарабатывать, используя приложение</Text>

      <Button
        onClick={() => {
          navigation.navigate('signin_client');
        }}>
        Войти
      </Button>
      <Button
        style={{marginTop:25, backgroundColor:'white', borderWidth:1}}
        onClick={() => {
          navigation.navigate('signin_driver');
        }}>
        Войти как водитель
      </Button>
    </Screen>
  );
};

const style = new StyleSheet.create({
  img: {
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  descr: {
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

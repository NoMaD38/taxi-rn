import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Screen from '../components/Screen';
import Map from '../components/Map';
import Menu from '../components/Menu';
import MenuContent from '../components/MenuContent';

import MainScreen from './BottomScreen/Main';

export default ({navigation}) => {
  return (
    <Screen withoutHeader withoutPadding>
      <Menu>
        <MenuContent
          navigation={navigation}
          type={1}
          name={'Петр'}
          phone={'+7 (999) 468-24-04'}
        />
      </Menu>

      <Map width={'100%'} height={'100%'} />

      <MainScreen />
    </Screen>
  );
};

const style = new StyleSheet.create({});

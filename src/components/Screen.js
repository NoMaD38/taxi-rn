import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

import Header from './Header'

export default ({children, disableScroll, headerTitle, onBack, withoutHeader, withoutPadding}) => (
  <View style={{backgroundColor: '#FFF', minHeight: '100%'}}>
    <StatusBar barStyle="dark-content"/>

    <SafeAreaView style={{minHeight: '100%'}}>
      <View style={{overflow: 'hidden'}}>

        {withoutHeader ? undefined : <Header onBack={onBack}><Text>{headerTitle}</Text></Header>}

      <ScrollView style={{minHeight: '100%'}} contentContainerStyle={{flexGrow: 1}}
        scrollEnabled={!disableScroll} bounces={false}>
        <View style={[
            withoutHeader ? undefined : {paddingTop: 60},
            withoutPadding ? undefined : {padding: 20},
            {minHeight: '100%'}
          ]}>
          {children}
        </View>
      </ScrollView>

      </View>
    </SafeAreaView>
  </View>
);

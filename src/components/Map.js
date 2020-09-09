import React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, View} from 'react-native';

const initRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default ({width, height, noInteractive, coords}) => {
  return (
    <View style={{width, height}}>
      <WebView
        // style={StyleSheet.absoluteFillObject}
        contentMode="recommended"
        source={{
          uri: `https://yandex.ru/maps/?ll=${initRegion.longitude},${initRegion.latitude}&z=12&l=map&client=001`,
        }}
        onHttpError={syntheticEvent => alert(syntheticEvent.nativeEvent)}
      />
      {noInteractive ? <View style={style.cover}></View> : undefined}
    </View>
  );
};

const style = new StyleSheet.create({
  cover: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

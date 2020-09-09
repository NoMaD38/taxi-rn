import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native'

import ImagePicker from 'react-native-image-picker';

export default ({onChange}) => {
  const [ photo, setPhoto ] = useState(null);

  const onSelect = () => {
    const opt = {title: 'Выберите фото'}
    ImagePicker.showImagePicker(opt, r => {
      if( r.didCancel || r.error ) return;
      setPhoto({ uri: r.uri });
    });
  }

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[ style.box, photo === null ? style.box_unselected : undefined ]}>
        { !photo ?
          <Text style={style.label}>Выберите фото</Text> :
          <Image style={style.image} source={photo} />
        }
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = new StyleSheet.create({
  box: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box_unselected: {

  },
  label: {
    fontWeight: '500',
    color: 'rgba(0,0,0,0.9)'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

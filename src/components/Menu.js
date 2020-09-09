import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'

import MenuIcon from '../svg/menu.svg'

let t = Dimensions.get('window').width * 0.7
const MENU_WIDTH = t < 200 ? 200 : t > 400 ? 400 : t;

export default ({children}) => {
  const [ opened, setOpened ] = useState(false);
  const slideAnim = useRef(new Animated.Value(-t)).current;

  const SlideRight = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const SlideLeft = () => {
    Animated.timing(slideAnim, {
      toValue: -t,
      duration: 500,
      useNativeDriver: true
    }).start(()=>{
      setOpened(!opened)
    });
  };

  return (<>
    <Animated.View style={[
      styles.container,
      opened && styles.container_opened,
      {translateX:slideAnim}
    ]}>
      <View style={[
          styles.menu__content,
          opened && styles.menu__content_opened
        ]}>
        {children}
      </View>
      <TouchableWithoutFeedback onPress={SlideLeft}>
        <View style={[
          styles.menu__cover,
        ]}/>
      </TouchableWithoutFeedback>
    </Animated.View>
    <TouchableWithoutFeedback onPress={() => {
      setOpened(!opened)
      SlideRight()
    }}>
      <View style={styles.menu__button}><MenuIcon /></View>
    </TouchableWithoutFeedback>
  </>);
}

const styles = new StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1
  },
  container_opened: {
    zIndex: 100,
    elevation: 200
  },
  menu__cover: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  menu__content: {
    height: '100%',
    backgroundColor: '#FFF',
    width: MENU_WIDTH,
    transform: [{translateX: -MENU_WIDTH}],
    zIndex: 2
  },
  menu__content_opened: {
    transform: [{translateX: 0}]
  },
  menu__button: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 9
  },
});

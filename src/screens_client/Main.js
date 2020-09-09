import React, {useState, useRef} from 'react';
import {StyleSheet, Dimensions, Text, Animated} from 'react-native';

import Screen from '../components/Screen';
import Map from '../components/Map';
import Menu from '../components/Menu';
import MenuContent from '../components/MenuContent';
import InlineAlert from '../components/InlineAlert';

import Navigation from './BottomScreen/Navigation';
import Main from './BottomScreen/Main';
import Search from './BottomScreen/Search';
import Trip from './BottomScreen/Trip';
import TripEnd from './BottomScreen/TripEnd';
import CancelTrip from './BottomScreen/CancelTrip';
import PaySelect from './BottomScreen/PaySelect';

export default ({navigation, route}) => {
  var params = route.params ? route.params : {};
  const [currentInterface, setCurrentInterface] = useState(
    params.initialInterface ? params.initialInterface : 0,
  );
  const [coords, setCoords] = useState({});
  const [alert, setAlert] = useState(false);

  // const fadeAnim = useRef(new Animated.Value((t+t)/2)).current;

  // const fadeIn = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true
  //   }).start();
  // };


// let t = Dimensions.get('window').height * 0.7
//   const slideAnim = useRef(new Animated.Value(-t)).current;

//   const slideUp = () => {
//     console.log('up');
//     Animated.timing(slideAnim, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: true
//     }).start();
//   };

//   const slideDown = () => {
//     Animated.timing(slideAnim, {
//       toValue: -t,
//       duration: 500,
//       useNativeDriver: true
//     }).start();
//   };

  var Interface;
  switch (currentInterface) {
    case 0:
      Interface = Navigation;
      break;
    case 1:
      Interface = Main;
      break;
    case 2:
      Interface = Search;
      break;
    case 3:
      Interface = TripEnd;
      break;
    case 4:
      Interface = Trip;
      break;
    case 5:
      Interface = CancelTrip;
      break;
    case 6:
      Interface = PaySelect;
      break;
    default:
      Interface = () => <></>;
  }

  return (
    <Screen withoutHeader withoutPadding>
      <Menu>
        <MenuContent
          navigation={navigation}
          type={2}
          name={'Иван'}
          phone={'+7 (999) 888-66-77'}
        />
      </Menu>

      <Map width={'100%'} height={'100%'} coords={coords} />
      <Interface
        navigation={navigation}
        setInterface={setCurrentInterface}
        setCoords={setCoords}
        // fadeIn={fadeIn}
        // fadeAnim={fadeAnim}
        // slideUp={slideUp}
      />

      <InlineAlert display={alert}>
        <Text style={{textAlign: 'center'}}>
          Вы можете бесплатно отменить поездку в течении 4 мин 59 сек
        </Text>
      </InlineAlert>
    </Screen>
  );
};

const styles = new StyleSheet.create({
});

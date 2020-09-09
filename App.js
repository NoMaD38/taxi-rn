import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn_client from './src/screens_client/SignIn';
import FaceIdActivate_client from './src/screens_client/FaceIdActivate';
import SignUp_client from './src/screens_client/SignUp';
import TouchIdActivate_client from './src/screens_client/TouchIdActivate';
import SmsCode_client from './src/screens_client/SmsCode';
import Cards_client from './src/screens_client/Cards';
import AddCards_client from './src/screens_client/AddCards';
import History_client from './src/screens_client/History';
import Splash1_client from './src/screens_client/Splash1';
import Splash2_client from './src/screens_client/Splash2';
import Rules_client from './src/screens_client/Rules';
import Settings_client from './src/screens_client/Settings';
import Privacy_client from './src/screens_client/Privacy';
import AppDescription_client from './src/screens_client/AppDescription';
import TermsOfUse_client from './src/screens_client/TermsOfUse';
import Main_client from './src/screens_client/Main';
import Profile_client from './src/screens_client/Profile';
import Addresses_client from './src/screens_client/Addresses';
import AddAddress_client from './src/screens_client/AddAddress';
import Address_client from './src/screens_client/Address';
import Chat_client from './src/screens_client/Chat';
import ChangeDestination_client from './src/screens_client/ChangeDestination';

import SignIn_driver from './src/screens_driver/SignIn';
import SignUp_driver from './src/screens_driver/SignUp';
import FaceIdActivate_driver from './src/screens_driver/FaceIdActivate';
import TouchIdActivate_driver from './src/screens_driver/TouchIdActivate';
import SmsCode_driver from './src/screens_driver/SmsCode';
import Main_driver from './src/screens_driver/Main';
import Profile_driver from './src/screens_driver/Profile';
import Cards_driver from './src/screens_driver/Cards';
import AddCards_driver from './src/screens_driver/AddCards';
import Orders_driver from './src/screens_driver/Orders';
import Wallet_driver from './src/screens_driver/Wallet';
import History_driver from './src/screens_driver/History';
import ConfirmDriver_driver from './src/screens_driver/ConfirmDriver';
import Settings_driver from './src/screens_driver/Settings';


const Stack = createStackNavigator();

const configAnim = {
  animation: 'timing',
  config:{
    stiffness: 500,
    duration: 500
  }
}

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash1_client" headerMode='none' screenOptions={{header: () => null}} screenOptions={{transitionSpec:{open: configAnim, close: configAnim}}}>
        <Stack.Screen name="signin_client" component={SignIn_client} />
        <Stack.Screen name="signup_client" component={SignUp_client} />
        <Stack.Screen name="faceid-activate_client" component={FaceIdActivate_client} />
        <Stack.Screen name="touchid-activate_client" component={TouchIdActivate_client} />
        <Stack.Screen name="sms-code_client" component={SmsCode_client} />
        <Stack.Screen name="cards_client" component={Cards_client} />
        <Stack.Screen name="add-cards_client" component={AddCards_client} />
        <Stack.Screen name="history_client" component={History_client} />
        <Stack.Screen name="splash1_client" component={Splash1_client} />
        <Stack.Screen name="splash2_client" component={Splash2_client} />
        <Stack.Screen name="rules_client" component={Rules_client} />
        <Stack.Screen name="settings_client" component={Settings_client} />
        <Stack.Screen name="privacy_client" component={Privacy_client} />
        <Stack.Screen name="app-description_client" component={AppDescription_client} />
        <Stack.Screen name="terms-of-use_client" component={TermsOfUse_client} />
        <Stack.Screen name="main_client" component={Main_client} />
        <Stack.Screen name="profile_client" component={Profile_client} />
        <Stack.Screen name="addresses_client" component={Addresses_client} />
        <Stack.Screen name="add-address_client" component={AddAddress_client} />
        <Stack.Screen name="address_client" component={Address_client} />
        <Stack.Screen name="chat_client" component={Chat_client} />
        <Stack.Screen name="change-destination_client" component={ChangeDestination_client} />

        <Stack.Screen name="signin_driver" component={SignIn_driver} />
        <Stack.Screen name="signup_driver" component={SignUp_driver} />
        <Stack.Screen name="faceid-activate_driver" component={FaceIdActivate_driver} />
        <Stack.Screen name="touchid-activate_driver" component={TouchIdActivate_driver} />
        <Stack.Screen name="sms-code_driver" component={SmsCode_driver} />
        <Stack.Screen name="main_driver" component={Main_driver} />
        <Stack.Screen name="profile_driver" component={Profile_driver} />
        <Stack.Screen name="cards_driver" component={Cards_driver} />
        <Stack.Screen name="add-cards_driver" component={AddCards_driver} />
        <Stack.Screen name="orders_driver" component={Orders_driver} />
        <Stack.Screen name="wallet_driver" component={Wallet_driver} />
        <Stack.Screen name="history_driver" component={History_driver} />
        <Stack.Screen name="confirm-driver_driver" component={ConfirmDriver_driver}/>
        <Stack.Screen name="settings_driver" component={Settings_driver} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import Switch from './Switch';
import CheckBox from './CheckBox';

export default ({navigation, type, name, phone}) => {
  const [option1, setOption1] = useState(false);

  const MenuItem = ({children, onClick}) => (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={style.menu__list__item}>{children}</View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={style.menu}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={false}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('profile_client')}>
          <View style={style.menu__top}>
            <View>
              <Text style={style.menu__top__name}>{name}</Text>
            </View>

            <View>
              <Text style={style.menu__top__phone}>{phone}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={style.menu__list}>
          {type === 1 ? (
            <>
              <MenuItem onClick={() => navigation.navigate('wallet_driver')}>
                <Text>Кошелек</Text>
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('orders_driver')}>
                <Text>Все заказы</Text>
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('history_driver')}>
                <Text>История поездок</Text>
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('cards_driver')}>
                <Text>Карты для вывода</Text>
              </MenuItem>
              <MenuItem
                onClick={() => navigation.navigate('confirm-driver_driver')}>
                <Text>Стать трезвым водителем</Text>
              </MenuItem>
              <MenuItem>
                <Text>Служба поддержки</Text>
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('settings_driver')}>
                <Text>Настройки</Text>
              </MenuItem>
              <MenuItem>
                <Text>О приложении</Text>
              </MenuItem>
              <Switch
                value={option1}
                onChange={setOption1}
                title="Не гасить экран"
                noBorder
              />
              <MenuItem
                onClick={() => {
                  navigation.popToTop();
                  navigation.navigate('signin_client');
                }}>
                <Text style={style.menu__appSwitch}>Войти как пассажир</Text>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => navigation.navigate('history_client')}>
                <Text>История поездок</Text>
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('cards_client')}>
                <Text>Способ оплаты</Text>
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('addresses_client')}>
                <Text>Мои адреса</Text>
              </MenuItem>
              <MenuItem>
                <CheckBox
                  value={option1}
                  onChange={setOption1}
                  title="Скачать оффлайн карту"
                  reverse
                />
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('settings_client')}>
                <Text>Настройки</Text>
              </MenuItem>
              <MenuItem onClick={() => navigation.navigate('privacy_client')}>
                <Text>Политика конфиденциальности</Text>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigation.popToTop();
                  navigation.navigate('signin_driver');
                }}>
                <Text style={style.menu__appSwitch}>Войти как водитель</Text>
              </MenuItem>
            </>
          )}
        </View>

        <View style={style.menu__bottom}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('splash2_client')}>
            <Text style={style.menu__bottom__signout}>Выйти</Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

const style = new StyleSheet.create({
  menu: {
    padding: 20,
    height: '100%',
  },
  menu__top: {},
  menu__top__name: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  menu__top__phone: {},

  menu__list: {
    marginVertical: 40,
    marginBottom: 60,
  },
  menu__list__item: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu__appSwitch: {
    color: '#C7C7C7',
  },
  menu__bottom: {
    position: 'absolute',
    bottom: 20,
    left: 0,
  },
  menu__bottom__signout: {
    color: '#EEC946',
    fontSize: 18,
    fontWeight: '600',
  },
});

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Screen from '../components/Screen'
import Message from '../components/Message'
import Input from '../components/Input'
import Button from '../components/Button'

import SendIcon from '../svg/send.svg'

const msg = [
  {text: 'test', date: new Date().toString(), type: 0},
  {text: 'test1', date: new Date(1590529524).toString(), type: 1}
]

export default ({navigation}) => {
  const [ messages, setMessages ] = useState(msg);
  const [ currentText, setCurrentText ] = useState('');

  return (<Screen headerTitle="Чат с водителем" onBack={() => navigation.goBack()}>
    <View style={style.chat}>
      { messages.map((m, ind) => (
        <Message key={ind} data={m} />
      )) }
    </View>

    <View style={style.inputCont}>
      <View style={style.input}>
        <Input value={currentText} onChange={setCurrentText}
          style={style.input__input} withoutBorder placeholder="Введите сообщение"/>
        <Button style={style.input__send}><SendIcon /></Button>
      </View>
    </View>
  </Screen>);
}

const style = new StyleSheet.create({
  chat: {
    paddingBottom: 60,
    flexDirection: 'column-reverse',
    height: '100%'
  },
  inputCont: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#FFF',
    shadowOffset:{  width: 0,  height: -5,  },
    shadowColor: '#E9E9E9',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  input: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',
  },
  input__input: {
    flex: 1,
    height: 40,
    marginVertical: 0,
    fontSize: 16,
  },
  input__send: {
    borderRadius: 30,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

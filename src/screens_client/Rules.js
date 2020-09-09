import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Screen from '../components/Screen';
import Button from '../components/Button';

export default () => {
  return (
    <Screen withoutHeader>
      <Text style={style.title}>Правила сервиса</Text>

      <View style={style.textCont}>
        <Text style={style.text}>
          Id turpis lacus non egestas viverra sit scelerisque. Id quis sed
          scelerisque lectus nullam. Interdum vestibulum nullam nunc tellus
          tortor placerat tincidunt. Amet arcu integer vestibulum nisi, cursus.
          Eu eros, tristique in eu morbi velit dui velit habitant. Elit, egestas
          facilisis proin a. At neque non ac diam ut nulla ipsum rutrum
          pellentesque. Maecenas id adipiscing auctor fringilla et nibh neque.
          Amet tristique etiam ultricies vel urna vitae, et elementum. Interdum
          scelerisque adipiscing odio a venenatis eu eget. Vestibulum
          consectetur laoreet non nec, consequat a. Ut massa ut proin in purus
          imperdiet urna in. Pretium posuere in ac, ante scelerisque arcu lacus,
          venenatis. Sed ornare dignissim facilisis aliquam neque. Iaculis
          egestas sed viverra amet. Sit amet ultrices tellus enim enim. Nam
          aliquam sem congue convallis egestas massa in hac turpis. Amet eget
          semper adipiscing vitae. Pellentesque natoque rutrum varius et lectus
          ullamcorper. Sit quis vel, vitae auctor pellentesque aliquam quam
          luctus. Leo vitae.
        </Text>
      </View>

      <Button>Согласен</Button>
    </Screen>
  );
};

const style = new StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#101010',
    marginVertical: 20,
    letterSpacing: 0.24,
  },
  textCont: {
    marginBottom: 30,
  },
  text: {
    lineHeight: 20,
    letterSpacing: 0.24,
  },
});

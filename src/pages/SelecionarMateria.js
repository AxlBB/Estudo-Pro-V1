import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    materia: 'Português',
    submateria: 'Redação',
    tempo: 120,
    certo: 80,
    total: 100,
    meta: 80,
  },
  {
    id: 2,
    materia: 'Matemática',
    submateria: 'Cálculo 1',
    tempo: 90,
    certo: 68,
    total: 100,
    meta: 70,
  },
];

const formatarTempo = (minutos) => {
  const horas = Math.floor(minutos / 60);
  const mins = minutos % 60;
  return `${horas}:${mins < 10 ? '0' : ''}${mins}`;
};

const SelecionarMateria = ({ route }) => {
  const navigation = useNavigation();
  const item = route?.params?.item;

  const handlePress = (item) => {
    navigation.navigate('Proxima', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => handlePress(item)}>
      <List.Item
        title={`${item.materia} (${item.submateria})`}
        description={`Certo: ${item.certo}% | Total: ${item.total}`}
        left={(props) => (
          <List.Icon
            {...props}
            color={item.certo >= item.meta ? 'green' : 'red'}
            icon="book-open-variant"
          />
        )}
        right={(props) => (
          <Text {...props} style={{ alignSelf: 'center', paddingLeft: 20 }}>
            {`${formatarTempo(item.tempo)} h`}
          </Text>
        )}
      />
    </TouchableOpacity>
  );

  return (
    <Container>
      <Header title={'Selecionar Matéria'} />
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#BFE5EF',
    borderRadius: 8,
    marginVertical: 5,
  },
});

export default SelecionarMateria;

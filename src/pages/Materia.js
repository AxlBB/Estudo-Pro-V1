import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';


const Materia = () => {
  const [materia, setMat] = useState('');
  const [submat, setSub] = useState('');
  const [meta, setMeta] = useState('');
  const [res, setRes] = useState('');

  const handleCalcular = () => {
    if (!materia.trim() || !submat.trim() || !meta.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos antes de cadastrar.');
    } else {
      setRes(`Matéria: ${materia}\nSubmatéria: ${submat}\nMeta de Acerto: ${meta}`);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    }
  };

  return (
    <Container>
      <Header title={'Cadastrar Matéria'} />
      <Body>
        <Input
          label="Matéria"
          value={materia}
          onChangeText={(text) => setMat(text)}
        />
        <Input
          label="Sub Matéria"
          value={submat}
          onChangeText={(text) => setSub(text)}
        />
        <Input
          label="Meta de acerto"
          keyboardType="decimal-pad"
          value={meta}
          onChangeText={(text) => setMeta(text)}
        />
        <Button mode="contained" onPress={handleCalcular} style={styles.button}>
          Cadastrar
        </Button>

        {res ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{res}</Text>
          </View>
        ) : null}
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 5,
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Materia;

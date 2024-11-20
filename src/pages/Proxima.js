import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

const Proxima = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  const [certo, setCerto] = useState('');
  const [total, setTotal] = useState('');
  const [tempo, setTempo] = useState('');

  useEffect(() => {
    if (item) {
      setCerto(item.certo ? String(item.certo) : '');
      setTempo(item.tempo ? String(item.tempo) : '');
      setTotal(item.total ? String(item.total) : '');
    }
  }, [item]);

  const handleCadastrar = () => {
    if (!certo.trim() || !total.trim() || !tempo.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos antes de cadastrar.');
    } else {
      Alert.alert('Sucesso', 'Dados registrados com sucesso!');
      navigation.goBack();
    }
  };

  return (
    <Container>
      <Header title={'Cadastrar Tempo e Acerto'} goBack={() => navigation.goBack()} />
      <Body>
        <Input
          label="Certo"
          keyboardType="numeric"
          value={certo}
          onChangeText={(text) => setCerto(text)}
        />
        
        <Input
          label="Total"
          keyboardType="numeric"
          value={total}
          onChangeText={(text) => setTotal(text)}
        />
        
        <Input
          label="Tempo Estudado em Minutos"
          keyboardType="numeric"
          value={tempo}
          onChangeText={(text) => setTempo(text)}
        />
        
        <Button mode="contained" onPress={handleCadastrar} style={styles.button}>
          Cadastrar
        </Button>
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
});

export default Proxima;

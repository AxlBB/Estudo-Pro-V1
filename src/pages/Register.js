import React, { useState } from 'react';
import { TextInput, Button, Headline } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo'

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();
  
  const [name, setName] = useState('Alex Bezerra');
  const [email, setEmail] = useState('alebizarriab@gmail.com');
  const [password, setPassword] = useState('pucminas');

  const handleRegister = () => {

    register({
      name: name,
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res){

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!', [
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

        Alert.alert('Atenção', 'Usuário não cadastrado!');
      }

    });
  }

  return (
    <Container>

      <View style={styles.header}>

        <Logo />

      </View>
      <Headline style={styles.textHeader} >Estudo Pro</Headline>

      <Body>
        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="lock" />}
        />
        <Button 
          style={styles.button}
          mode="contained" 
          onPress={handleRegister}>
          REGISTRAR
        </Button>
        <Button 
          style={styles.button}
          mode="outlined" 
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    elevation: 3, // Sombras para Android
    shadowOpacity: 0, // Desabilitar sombras nativas do iOS se necessário
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
    elevation: 2, // Adiciona sombra no Android para o header
    shadowOpacity: 0, // Remove sombras no iOS, se necessário
  },
});


export default Register;

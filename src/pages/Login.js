import React, { useState } from 'react';
import { TextInput, Button, Headline } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo'

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import {login} from '../services/auth.services';

const Login = () => {

  const navigation = useNavigation();
  const {setSigned, setName} = useUser();

  const [email, setEmail] = useState('alebizarriab@gmail.com');
  const [password, setPassword] = useState('pucminas');

    const handleLogin = () => {

    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);

      }else{

        Alert.alert('Atenção', 'Usuário ou senha iválidos!');
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
          onPress={handleLogin}>
          Login
        </Button>
        <Button 
          style={styles.button}
          mode="outlined" 
          onPress={() => navigation.navigate('Register')}>
          Registrar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    elevation: 3, // Sombras no Android
    shadowOpacity: 0, // Remove sombras no iOS se não forem necessárias
  },
  textHeader:{
    textAlign:'center',
  },
  header:{
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  }

})

export default Login;

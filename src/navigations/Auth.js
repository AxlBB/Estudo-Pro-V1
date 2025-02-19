import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Home from '../pages/Home';
//import SelecionarMateria from '../pages/SelecionarMateria';
import Proxima from '../pages/Proxima';

import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
      <Stack.Screen name="Register" component={Register} options={{ header: () => null }} />
      <Stack.Screen name="Proxima" component={Proxima} options={{ header: () => null }} />
    </Stack.Navigator>
  );
};

export default Main;

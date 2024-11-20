import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import SelecionarMateria from '../pages/SelecionarMateria';
import Proxima from '../pages/Proxima';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
      <Stack.Screen name="SelecionarMateria" component={SelecionarMateria} options={{ header: () => null }} />
      <Stack.Screen name="Proxima" component={Proxima} options={{ header: () => null }} />
    </Stack.Navigator>
  );
};

export default Main;

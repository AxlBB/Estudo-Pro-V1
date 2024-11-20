import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Materia from './Materia';
import SelecionarMateria from './SelecionarMateria';
import Proxima from './Proxima';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'selecionarMateria', title: 'Selecionar Matéria', icon: 'animation' },
    { key: 'cadastrarMateria', title: 'Cadastrar Matéria', icon: 'draw-pen' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    selecionarMateria: SelecionarMateria,
    cadastrarMateria: Materia,
    proxima: Proxima,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;

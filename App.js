import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import UserProvider from './src/contexts/UserContext';
import Route from './src/navigations/Route';

const App = () => {
return (
    <UserProvider>
    <NavigationContainer>
        <Route />
    </NavigationContainer>
    </UserProvider>
  );
};

export default App;

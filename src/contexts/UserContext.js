import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UsereProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState(false);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(){
  const context = useContext(UserContext);

  const {signed, setSigned, name, setName} = context;
  return {signed, setSigned, name, setName};
}


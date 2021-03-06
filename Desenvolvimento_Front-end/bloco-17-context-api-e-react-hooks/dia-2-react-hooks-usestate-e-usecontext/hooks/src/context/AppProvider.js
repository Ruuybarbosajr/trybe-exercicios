import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({children}) {
  const [ stateA, setStateA ] = useState('initialStateA')
  const [ stateB, setStateB ] = useState('initialStateB')

  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
'use client'
import React, { createContext, useState } from 'react';

const FunDialogsContext = createContext();

const FunDialogsProvider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const values = {
    current,
    setCurrent
  }
  return (
    <FunDialogsContext.Provider value={values}>
      {children}
    </FunDialogsContext.Provider>
  );
};

export { FunDialogsContext, FunDialogsProvider };
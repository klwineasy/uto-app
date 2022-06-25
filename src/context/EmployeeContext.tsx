import React, { useState, useEffect, createContext, useContext } from 'react';

export interface EmployeeContextProps {}

export interface EmployeeProviderProps {
  children: React.ReactElement;
}

export const EmployeeContext = createContext({} as EmployeeContextProps);

export const EmployeeProvider = (props: EmployeeProviderProps) => {
  const { children } = props;

  const context: EmployeeContextProps = {};

  return (
    <EmployeeContext.Provider value={context}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => {
  const context = useContext(EmployeeContext);

  if (context === undefined) {
    throw new Error('useEmployee must be used within a EmployeeProvider');
  }

  return {
    ...context,
  };
};

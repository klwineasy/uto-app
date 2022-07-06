import React, { useState, useEffect, createContext, useContext } from 'react';

export interface WareHouseContextProps {}

export interface WareHouseProviderProps {
  children: React.ReactElement;
}

export const WareHouseContext = createContext({} as WareHouseContextProps);

export const WareHouseProvider = (props: WareHouseProviderProps) => {
  const { children } = props;

  const context: WareHouseContextProps = {};

  return (
    <WareHouseContext.Provider value={context}>
      {children}
    </WareHouseContext.Provider>
  );
};

export const useWareHouse = () => {
  const context = useContext(WareHouseContext);

  if (context === undefined) {
    throw new Error('useWareHouse must be used within a WareHouseProvider');
  }

  return {
    ...context,
  };
};

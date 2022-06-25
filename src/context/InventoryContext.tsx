import React, { useState, useEffect, createContext, useContext } from 'react';

export interface InventoryContextProps {}

export interface InventoryProviderProps {
  children: React.ReactElement;
}

export const InventoryContext = createContext({} as InventoryContextProps);

export const InventoryProvider = (props: InventoryProviderProps) => {
  const { children } = props;

  const context: InventoryContextProps = {};

  return (
    <InventoryContext.Provider value={context}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);

  if (context === undefined) {
    throw new Error('useInventory must be used within a InventoryProvider');
  }

  return {
    ...context,
  };
};

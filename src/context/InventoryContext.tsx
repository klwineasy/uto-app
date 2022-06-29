import React, { useEffect, createContext, useContext } from 'react';
import { useImmer } from 'use-immer';
import { DataStore } from 'aws-amplify';
import { Product, Inventory } from '../models';
import { EntityState, EntityResult } from '.';

export interface InventoryContextProps {
  getInventoryByProduct: (product: Product) => Promise<Inventory[]>;
}

export interface InventoryProviderProps {
  children: React.ReactElement;
}

export const InventoryContext = createContext({} as InventoryContextProps);

export const InventoryProvider = (props: InventoryProviderProps) => {
  const { children } = props;

  const getInventoryByProduct = async (product: Product) => {
    const currentInventory = (await DataStore.query(Inventory)).filter(
      (o) => o.product?.id === product.id
    );
    return currentInventory;
  };

  const context: InventoryContextProps = {
    getInventoryByProduct,
  };

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

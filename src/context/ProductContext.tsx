import React, { useState, useEffect, createContext, useContext } from 'react';
import { DataStore } from 'aws-amplify';
import { useImmer } from 'use-immer';
import { Product } from '../models';
import { EntityState, EntityResult } from '.';

export interface ProductContextProps {
  products: EntityResult<Product[]>;
  createProduct: (product: Product) => Promise<void>;
  deleteProduct: (productID: string) => Promise<void>;
}

export interface ProductProviderProps {
  children: React.ReactElement;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = (props: ProductProviderProps) => {
  const { children } = props;
  const [products, setProducts] = useImmer<EntityResult<Product[]>>({
    state: EntityState.LOADING,
  });

  useEffect(() => {
    fetchProducts();
    const subscription = DataStore.observe(Product).subscribe(() =>
      fetchProducts()
    );
    return () => subscription.unsubscribe();
  }, []);

  const fetchProducts = async () => {
    setProducts({
      ...products,
      state: EntityState.LOADING,
    });
    try {
      const results = await DataStore.query(Product);
      if (results && results.length > 0) {
        setProducts({
          state: EntityState.VALID,
          value: results,
        });
      } else {
        setProducts({
          state: EntityState.NOT_FOUND,
          value: results,
        });
      }
    } catch (err) {
      setProducts({
        ...products,
        state: EntityState.ERROR,
        error: err,
      });
    }
  };

  const createProduct = async (product: Product) => {
    try {
      const result = await DataStore.save(new Product(product));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const deleteProduct = async (productID: string) => {
    try {
      const productToDelete = await DataStore.query(Product, productID);
      productToDelete && (await DataStore.delete(productToDelete));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const context: ProductContextProps = {
    products,
    createProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return {
    ...context,
  };
};

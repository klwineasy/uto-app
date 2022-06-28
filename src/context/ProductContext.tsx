import React, { useState, useEffect, createContext, useContext } from 'react';
import { DataStore } from 'aws-amplify';
import { useImmer } from 'use-immer';
import { Product } from '../models';
import { EntityState, EntityResult } from '.';

export interface ProductContextProps {
  products: EntityResult<Product[]>;
  getProduct: (productCode: string) => Promise<Product[] | undefined>;
  createProduct: (product: Product) => Promise<void>;
  deleteProduct: (product: Product) => Promise<void>;
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

  const getProduct = async (productCode: string) => {
    try {
      const product = await DataStore.query(Product, (o) =>
        o.code('eq', productCode)
      );
      return product;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const createProduct = async (product: Product) => {
    try {
      const result = await DataStore.save(new Product(product));
      console.log(result);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const deleteProduct = async (product: Product) => {
    try {
      await DataStore.delete(product);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const context: ProductContextProps = {
    products,
    getProduct,
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

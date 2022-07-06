import React, {
  useCallback,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { DataStore } from 'aws-amplify';
import { useImmer } from 'use-immer';
import { Product } from '../../models';
import { EntityState, EntityResult } from '../';
import { usePrompt, ProductCreateForm } from '../../components';

export interface ProductContextProps {
  products: EntityResult<Product[]>;
  getProduct: (product: Product) => Promise<Product | undefined>;
  createProduct: (product: Product) => Promise<void>;
  updateProduct: (id: string, product: Product) => Promise<void>;
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

  const getProduct = async (product: Product) => {
    try {
      const productFetched = await DataStore.query(Product, product.id);
      return productFetched;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const createProduct = async (product: any) => {
    try {
      await DataStore.save(new Product(product));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const updateProduct = async (id: string, product: Product) => {
    try {
      const original = await getProduct(product);
      if (original) {
        await DataStore.save(
          Product.copyOf(original, (updated) => {
            updated.code = product.code;
            updated.description = product.description;
            updated.packing = product.packing;
            updated.unit = product.unit;
            updated.salePrice = product.salePrice;
          })
        );
      } else {
        console.error(product.code + 'does not exist in database.');
      }
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
    updateProduct,
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
  const { products } = context;
  const { setPromptTitle, setPromptContent, showPrompt } = usePrompt();

  const createProductHandler = useCallback(
    async (
      e:
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.stopPropagation();

      setPromptTitle('Create Product');
      setPromptContent(<ProductCreateForm />);
      showPrompt();
    },
    [products]
  );

  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return {
    ...context,
    createProductHandler,
  };
};

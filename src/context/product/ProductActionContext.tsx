import React, {
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';
import { useImmer } from 'use-immer';
import { Product } from '../../models';
import { EntityState, EntityResult } from '../';
import { usePrompt, ProductEditForm } from '../../components';

export interface ProductActionContextProps {
  product: EntityResult<Product>;
}

export interface ProductActionProviderProps {
  children: React.ReactElement;
  product: Product;
}

export const ProductActionContext = createContext(
  {} as ProductActionContextProps
);

export const ProductActionProvider = (props: ProductActionProviderProps) => {
  const { children, product: providedProduct } = props;

  const [product, setCurrentProduct] = useImmer<EntityResult<Product>>({
    state: EntityState.LOADING,
  });

  useEffect(() => {
    if (!providedProduct) return;
    setCurrentProduct({
      state: EntityState.VALID,
      value: providedProduct,
    });
  }, [providedProduct]);

  const context: ProductActionContextProps = {
    product,
  };

  return (
    <ProductActionContext.Provider value={context}>
      {children}
    </ProductActionContext.Provider>
  );
};

export const useProductAction = () => {
  const context = useContext(ProductActionContext);
  const { product } = context;
  const { setPromptTitle, setPromptContent, showPrompt } = usePrompt();

  const editProductHandler = useCallback(
    async (
      e:
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (product.state !== EntityState.VALID) return;

      e.stopPropagation();

      setPromptTitle('Edit Product');
      setPromptContent(<ProductEditForm product={product.value!} />);
      showPrompt();
    },
    [product]
  );

  if (context === undefined) {
    throw new Error(
      'useActionProduct must be used within a ProductActionProvider'
    );
  }

  return {
    ...context,
    editProductHandler,
  };
};

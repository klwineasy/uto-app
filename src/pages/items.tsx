import React, { useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Navbar } from '../components';
import { useProduct } from '../context';

const items = () => {
  const { products, getProduct, createProduct, deleteProduct } = useProduct();
  console.log(products);
  const handleCreateProduct:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = async () => {
    await createProduct({
      id: '',
      code: '10-GHPO',
      description: 'Glass Tube Rotary Pump',
      packing: '1/box',
      salePrice: 118900,
      unit: 'Pcs',
    });
  };
  const handleDeleteProduct = async () => {
    const product = await getProduct('10-CHEO');
    product && (await deleteProduct(product[0]));
  };
  const handleGetProduct = async (productCode: string) => {
    const product = await getProduct(productCode);
    console.log(product);
  };

  return (
    <Box>
      <Navbar />
      <h1>List of items</h1>
      <Button onClick={handleCreateProduct}>Create Product</Button>
      <Button onClick={() => handleDeleteProduct()}>Delete Product</Button>
      <Button onClick={() => handleGetProduct('10-CHEO')}>Get Product</Button>
    </Box>
  );
};

export default items;

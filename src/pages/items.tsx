import React, { useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Navbar } from '../components';
import { useProduct } from '../context';

const items = () => {
  const { products, createProduct, deleteProduct } = useProduct();
  console.log(products);
  const handleCreateProduct:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = async () => {
    await createProduct({
      id: '10-ghpo',
      code: '10-GHPO',
      description: 'Glass Tube Rotary Pump',
      packing: '1/box',
      salePrice: 118900,
      unit: 'Pcs',
    });
  };
  const handleDeleteProduct = async (productID: string) => {};

  return (
    <Box>
      <Navbar />
      <h1>List of items</h1>
      <Button onClick={() => handleCreateProduct}>Create Product</Button>
      <Button onClick={() => handleDeleteProduct('')}>Delete Product</Button>
    </Box>
  );
};

export default items;

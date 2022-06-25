import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Navbar } from '../components';
import { useProduct } from '../context';

const items = () => {
  const { products, createProduct } = useProduct();
  createProduct({
    code: '10-GHPO',
    description: 'Glass Tube Rotary Pump',
    packing: '1/box',
    salePrice: 118900,
    unit: 'Pcs',
  });
  return (
    <Box>
      <Navbar />
      <h1>List of items</h1>
    </Box>
  );
};

export default items;

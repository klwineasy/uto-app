import React, { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  IconButton,
  Table,
  TableBody,
  TableFooter,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  Typography,
  TableRow,
  Paper,
  InputBase,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Navbar } from '../components';
import { useProduct, ProductActionProvider } from '../context';
import { ProductTableRow, ProductTablePagination } from '../components';
import { Product } from '../models';

const products = () => {
  const { products, createProductHandler } = useProduct();
  const [searchedProduct, setSearchedProduct] = useState<Product[]>();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - products.value!.length)
      : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchProducts = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const searchValue = e.target.value.toLowerCase();
    if (products.value && searchValue.length > 0) {
      const searchedProducts = products.value.filter(
        (product) =>
          product.description.toLowerCase().includes(searchValue) ||
          product.code.toLocaleLowerCase().includes(searchValue)
      );
      setSearchedProduct(searchedProducts);
    } else {
      setSearchedProduct(products.value);
    }
  };

  return (
    <Box>
      <Navbar />
      <Container maxWidth='xl' sx={{ marginY: 2 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          marginY={5}
          spacing={2}>
          <Typography variant='h3' component='h2'>
            Products
          </Typography>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 600,
            }}>
            <InputBase
              sx={{ flex: 2 }}
              placeholder='Search Items'
              inputProps={{ 'aria-label': 'search items' }}
              onChange={handleSearchProducts}
            />
            <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
          <Button
            variant='contained'
            color='secondary'
            sx={{ fontWeight: 'bold' }}
            startIcon={<AddIcon />}
            onClick={createProductHandler}>
            New Item
          </Button>
        </Stack>
        <Box>
          {products.state === 0 ? (
            <Typography>Loading...</Typography>
          ) : products.state === 1 ? (
            <Typography>Error fetching products...</Typography>
          ) : products.state === 2 ? (
            <Typography>There is no products...</Typography>
          ) : (
            <Box>
              <TableContainer component={Paper}>
                <Table aria-label='collapsible table'>
                  <TableHead>
                    <TableRow style={{ background: 'aliceblue' }}>
                      <TableCell />
                      <TableCell
                        className='tCell'
                        style={{ fontWeight: 'bold', fontSize: '18px' }}>
                        Code
                      </TableCell>
                      <TableCell
                        style={{ fontWeight: 'bold', fontSize: '18px' }}
                        align='left'>
                        Description
                      </TableCell>
                      <TableCell
                        style={{ fontWeight: 'bold', fontSize: '18px' }}
                        align='left'>
                        Sale Price
                      </TableCell>
                      <TableCell
                        style={{ fontWeight: 'bold', fontSize: '18px' }}
                        align='left'>
                        Unit
                      </TableCell>
                      <TableCell
                        style={{ fontWeight: 'bold', fontSize: '18px' }}
                        align='left'>
                        Packing
                      </TableCell>
                      <TableCell
                        style={{ fontWeight: 'bold', fontSize: '18px' }}
                        align='left'>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchedProduct && searchedProduct.length > 0 ? (
                      searchedProduct
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((product) => {
                          return (
                            <ProductActionProvider
                              product={product}
                              key={product.id}>
                              <ProductTableRow key={product.id} />
                            </ProductActionProvider>
                          );
                        })
                    ) : searchedProduct && searchedProduct.length === 0 ? (
                      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell>No Product Found!</TableCell>
                      </TableRow>
                    ) : (
                      products.value &&
                      products.value
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((product) => {
                          return (
                            <ProductActionProvider
                              product={product}
                              key={product.id}>
                              <ProductTableRow key={product.id} />
                            </ProductActionProvider>
                          );
                        })
                    )}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: 'All', value: -1 },
                        ]}
                        colSpan={7}
                        count={
                          searchedProduct && searchedProduct.length > 0
                            ? searchedProduct.length
                            : products.value!.length
                        }
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: {
                            'aria-label': 'rows per page',
                          },
                          native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={ProductTablePagination}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default products;

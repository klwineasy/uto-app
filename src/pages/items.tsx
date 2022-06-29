import React, { useState } from 'react';
import { Inventory } from '../models';
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
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Navbar } from '../components';
import { useProduct, useInventory } from '../context';
import { useTheme } from '@mui/material/styles';
import {
  ItemTableRow,
  ItemTablePagination,
  ItemCreate,
  ItemEdit,
  ItemDelete,
} from '../components';

const items = () => {
  const { products, getProduct, createProduct, updateProduct, deleteProduct } =
    useProduct();
  const [openNewItemModal, setOpenNewItemModal] = useState(false);
  const [openEditItemModal, setOpenEditItemModal] = useState(false);
  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  return (
    <Box>
      {openNewItemModal && (
        <ItemCreate
          openState={openNewItemModal}
          setOpenState={setOpenNewItemModal}
        />
      )}
      {openEditItemModal && (
        <ItemEdit
          openState={openEditItemModal}
          setOpenState={setOpenEditItemModal}
        />
      )}
      {openDeleteItemModal && (
        <ItemDelete
          openState={openDeleteItemModal}
          setOpenState={setOpenDeleteItemModal}
        />
      )}
      <Navbar />
      <Container maxWidth='xl' sx={{ marginY: 2 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          marginY={5}
          spacing={2}>
          <Typography variant='h3' component='h2'>
            Items
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
            onClick={() => setOpenNewItemModal(true)}>
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
                    {products.value &&
                      products.value.map((product) => {
                        return (
                          <ItemTableRow
                            key={product.id}
                            product={product}
                            openEditModal={setOpenEditItemModal}
                            openDeleteModal={setOpenDeleteItemModal}
                          />
                        );
                      })}
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
                        count={products.value!.length}
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
                        ActionsComponent={ItemTablePagination}
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

export default items;

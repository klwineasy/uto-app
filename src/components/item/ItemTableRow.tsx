import React, { useState } from 'react';
import { Product, Inventory } from '../../models';
import { useInventory } from '../../context';
import {
  Box,
  Stack,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  product: Product;
  openEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  openDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ItemTableRow = (props: Props) => {
  const { product, openEditModal, openDeleteModal } = props;
  const { getInventoryByProduct } = useInventory();
  const [open, setOpen] = React.useState(false);
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleOpenInventory = async () => {
    const result = await getInventoryByProduct(product);
    console.log(result);
    setInventories(result);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => {
              setOpen(!open);
              handleOpenInventory();
            }}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {product.code}
        </TableCell>
        <TableCell align='left'>{product.description}</TableCell>
        <TableCell align='left'>{product.salePrice}</TableCell>
        <TableCell align='left'>{product.unit}</TableCell>
        <TableCell align='left'>{product.packing}</TableCell>
        <TableCell>
          {' '}
          <Stack direction='row' spacing={2}>
            <Button
              variant='contained'
              startIcon={<DeleteIcon />}
              color='secondary'
              onClick={() => openDeleteModal(true)}
              sx={{ fontWeight: 'bold' }}>
              Delete
            </Button>
            <Button
              variant='contained'
              startIcon={<EditIcon />}
              color='secondary'
              onClick={() => openEditModal(true)}
              sx={{ fontWeight: 'bold' }}>
              Edit
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ marginLeft: 15 }}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: 'bold', fontSize: '14px' }}
                      align='left'>
                      Warehouse
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 'bold', fontSize: '14px' }}
                      align='left'>
                      Location
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 'bold', fontSize: '14px' }}
                      align='left'>
                      Qty
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inventories &&
                    inventories.map((inventory: Inventory) => (
                      <TableRow key={inventory.id}>
                        <TableCell align='left'>
                          {inventory.warehouse?.name}
                        </TableCell>
                        <TableCell align='left'>
                          {inventory.location?.name}
                        </TableCell>
                        <TableCell align='left'>{inventory.quantity}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

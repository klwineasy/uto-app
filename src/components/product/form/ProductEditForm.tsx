import React from 'react';
import { Product } from '../../../models';
import { Controller, useForm } from 'react-hook-form';
import {
  Container,
  Grid,
  Button,
  IconButton,
  TextField,
  DialogActions,
} from '@mui/material';
import { usePrompt } from '../../prompt';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import LoopIcon from '@mui/icons-material/Loop';
import { useProduct } from '../../../context';
import { useNotification } from '../../notification';

type Props = {
  product: Product;
};

export const ProductEditForm = (props: Props) => {
  const { product } = props;
  const { hidePrompt } = usePrompt();
  const { updateProduct } = useProduct();
  const { handleSubmit, control } = useForm();
  const {
    setNotificationEnabled,
    setNotificationMessage,
    setNotificationSeverity,
  } = useNotification();

  const onSubmit = async (data: any) => {
    const newProduct: Product = {
      id: product.id,
      code: data.code,
      description: data.description,
      salePrice: Number(data.salePrice),
      unit: data.unit,
      packing: data.packing,
    };
    try {
      await updateProduct(product.id, newProduct);
      setNotificationEnabled(true);
      setNotificationSeverity('success');
      setNotificationMessage(
        `Product: ${newProduct.description} has been successfully updated.`
      );
    } catch (err: any) {
      setNotificationEnabled(true);
      setNotificationSeverity('error');
      setNotificationMessage(
        `Unknown error occured when updating the product: ${newProduct.description}`
      );
      console.error(err.message);
    }

    hidePrompt();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name='code'
              control={control}
              defaultValue={product.code}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Code'
                  variant='filled'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
              rules={{ required: 'Product code required.' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='description'
              control={control}
              defaultValue={product.description}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Description'
                  variant='filled'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
              rules={{ required: 'Description required' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name='salePrice'
              control={control}
              defaultValue={product.salePrice}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Sale Price'
                  variant='filled'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
              rules={{ required: 'Sale Price required' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name='unit'
              control={control}
              defaultValue={product.unit}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Unit'
                  variant='filled'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
              rules={{ required: 'Unit required' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name='packing'
              control={control}
              defaultValue={product.packing}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Packing'
                  variant='filled'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
              rules={{ required: 'Packing required' }}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 4 }}>
          <Button
            sx={{ mr: 1 }}
            variant='contained'
            color='secondary'
            onClick={hidePrompt}>
            Cancel
          </Button>
          <Button
            type='submit'
            variant='contained'
            endIcon={<DoubleArrowIcon />}
            color='secondary'>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Container>
  );
};

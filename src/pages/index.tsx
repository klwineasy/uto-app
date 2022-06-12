import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAmplify } from '../context';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const Home: NextPage = () => {
  const { authState } = useAmplify();
  if (authState !== AuthState.SignedIn) {
    return null;
  }
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Hello World!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;

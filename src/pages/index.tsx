import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box } from '@mui/material';
import { useAmplify } from '../context';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Navbar } from '../components';

const Home: NextPage = () => {
  const { authState } = useAmplify();
  if (authState !== AuthState.SignedIn) {
    return null;
  }
  return (
    <Box>
      <Navbar />
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
    </Box>
  );
};

export default Home;

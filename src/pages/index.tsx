import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Authenticator } from '@aws-amplify/ui-react';

const Home: NextPage = ({ signOut, user }) => {
  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
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
              {user?.username}
            </Typography>
          </Box>
        </Container>
      )}
    </Authenticator>
  );
};

export default Home;

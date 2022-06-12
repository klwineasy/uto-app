import React from 'react';
import type { NextPage } from 'next';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material/';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import AppsIcon from '@mui/icons-material/Apps';

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your email address',
      isRequired: true,
      label: 'Email',
    },
    password: {
      labelHidden: false,
      placeholder: 'Enter your password',
      isRequired: true,
      label: 'Password',
    },
  },
};

const Login: NextPage = () => {
  return (
    <ThemeProvider>
      <AppBar position='relative'>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography
            variant='h5'
            component='h1'
            color='#fff'
            align='center'
            noWrap>
            UTO
          </Typography>
          <AppsIcon />
        </Toolbar>
      </AppBar>
      <Container maxWidth='xs'>
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Authenticator hideSignUp={true} formFields={formFields}>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user?.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

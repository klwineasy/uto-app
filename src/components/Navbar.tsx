import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Container,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { Flex } from '@aws-amplify/ui-react';
import { useAmplify } from '../context';
import { useRouter } from 'next/router';

type Props = {};

export const Navbar = (props: Props) => {
  const { logout } = useAmplify();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <AppBar
      position='relative'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
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
      <Box sx={{ margin: '0 2rem' }}>
        <Tooltip title='Open settings'>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{
            mt: '45px',
            '& .MuiMenu-list': {
              bgcolor: '#333',
              color: '#fff',
            },
            '& .MuiMenuItem-root:hover': {
              color: '#ec7211',
            },
          }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign='center'>Account</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign='center'>Settings</Typography>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Typography textAlign='center'>Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
};

import React, { useState, MouseEvent, Fragment } from 'react';
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
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
//@ts-ignore
import { useAmplify } from '../context';
import { useRouter } from 'next/router';
import { SideMenu } from './sidemenu';

type Props = {};

export const Navbar = (props: Props) => {
  const { logout } = useAmplify();
  const router = useRouter();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event: MouseEvent<HTMLElement>) => {
    console.log(event);
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const handleNavigation = (event: MouseEvent<HTMLElement>) => {
    //@ts-ignore
    router.push('/' + event.target.innerText.toLowerCase());
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
      <Toolbar
        sx={{ justifyContent: 'center' }}
        onClick={() => {
          setToggleSideMenu(!toggleSideMenu);
          console.log(toggleSideMenu);
        }}>
        <Typography
          variant='h5'
          component='h1'
          color='#fff'
          align='center'
          noWrap>
          UTO
        </Typography>
        <AppsIcon />
        <SideMenu toggleSideMenu={toggleSideMenu} />
      </Toolbar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Fragment>
          <MenuItem onClick={handleNavigation}>
            <Typography sx={{ fontWeight: 'bold' }}>Products</Typography>
          </MenuItem>
        </Fragment>
        <Fragment>
          <MenuItem>
            <Typography sx={{ fontWeight: 'bold' }}>Sales</Typography>
          </MenuItem>
        </Fragment>
        <Fragment>
          <MenuItem>
            <Typography sx={{ fontWeight: 'bold' }}>Credits</Typography>
          </MenuItem>
        </Fragment>
        <Fragment>
          <MenuItem onClick={handleNavigation}>
            <Typography sx={{ fontWeight: 'bold' }}>Transfers</Typography>
          </MenuItem>
        </Fragment>
        <Fragment>
          <MenuItem>
            <Typography sx={{ fontWeight: 'bold' }}>Cashbook</Typography>
          </MenuItem>
        </Fragment>
      </Box>
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

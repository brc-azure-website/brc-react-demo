import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import colorConfigs from "../configs/colorConfigs";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { AccountBox, Add, FavoriteBorder, Login, Logout } from '@mui/icons-material';
import Cookies from 'js-cookie';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    Cookies.remove("art_space_signing_jwt_token");
    setAnchorEl(null);
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      if (searchValue.trim() === '') {
        navigate('/');
      } else {
        navigate(`/search/${encodeURIComponent(searchValue)}`);
        navigate(0);
      }
    }
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component={Link} to='/profile'><AccountBox /> Your Profile</MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to='/liked'><FavoriteBorder /> Liked Images</MenuItem>
      <MenuItem onClick={handleLogOut} component={Link} to='/'><Logout /> Log out</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: colorConfigs.green.main}}>
        <Toolbar>
          <Typography
            component={Link}
            to={"/"}
            variant="h4"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' }, textDecoration: 'none', color: 'white' }}
          >
            ART_Space
          </Typography>
          <Search 
            onChange={(event) => setSearchValue(event.target.value)}
            onKeyDown={onEnterPress}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ width: '40vw' }}
            />
          </Search>
          { Cookies.get("art_space_signing_jwt_token") ? (
            <>
              <Button 
                  startIcon={<Add />}
                  variant="text" 
                  color='inherit' 
                  size='large'
                  href='/upload'
                >
                Upload Image
              </Button>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Button 
                    startIcon={<Login />}
                    variant="text" 
                    color='inherit' 
                    size='large'
                    href='/login'
                    justifyContent='flex-end'
                  >
                  Sign In
                </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default Topbar